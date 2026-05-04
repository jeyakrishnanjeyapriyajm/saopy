import { useState } from "react";
import toast from "react-hot-toast";
import { useSubmitContactFormMutation } from "../api/contactApi";

const initialFormData = {
  full_name: "",
  phone_number: "",
  email: "",
  service_type: "Wash & Dry",
  pickup_address: "",
  postcode: "",
  message: "",
};

export default function useContactForm(options = {}) {
  const { resetAfterSubmit = true, closeAfterSubmit = null } = options;

  const [submitContactForm, { isLoading }] = useSubmitContactFormMutation();
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const setField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const validateForm = () => {
    if (!formData.full_name.trim()) {
      toast.error("Please enter your full name");
      return false;
    }

    if (!formData.phone_number.trim()) {
      toast.error("Please enter your phone number");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return false;
    }

    if (!formData.pickup_address.trim()) {
      toast.error("Please enter your pickup address");
      return false;
    }

    if (!formData.postcode.trim()) {
      toast.error("Please enter your postcode");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    e?.stopPropagation();

    if (isLoading) return;
    if (!validateForm()) return;

    try {
      await submitContactForm(formData).unwrap();

      toast.success("Message sent successfully!");

      if (resetAfterSubmit) resetForm();
      if (typeof closeAfterSubmit === "function") closeAfterSubmit();
    } catch (error) {
      console.error("Contact form submit error:", error);
      toast.error(error?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
    setField,
    handleSubmit,
    resetForm,
    isLoading,
    isSubmitting: isLoading,
  };
}
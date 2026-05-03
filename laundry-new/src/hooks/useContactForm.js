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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const setField = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const payload = {
      full_name: formData.full_name.trim(),
      phone_number: formData.phone_number.trim(),
      email: formData.email.trim(),
      service_type: formData.service_type.trim(),
      pickup_address: formData.pickup_address.trim(),
      postcode: formData.postcode.trim(),
      message: formData.message.trim(),
    };

    if (
      !payload.full_name ||
      !payload.phone_number ||
      !payload.email ||
      !payload.service_type ||
      !payload.pickup_address ||
      !payload.postcode ||
      !payload.message
    ) {
      toast.error("Please fill in all fields, including postcode.");
      return;
    }

    try {
      const result = await submitContactForm(payload).unwrap();

      toast.success(
        result?.message ||
          "Your laundry pickup request has been sent successfully."
      );

      if (resetAfterSubmit) {
        resetForm();
      }

      if (typeof closeAfterSubmit === "function") {
        closeAfterSubmit();
      }
    } catch (error) {
      console.error("Contact form submit error:", error);

      toast.error(
        error?.data?.message ||
          error?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting: isLoading,
    resetForm,
    setField,
  };
}
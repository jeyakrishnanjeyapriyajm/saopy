import { logo } from "../../assets";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

const socialLinks = [
  // {
  //   key: "insta",
  //   icon: <FaInstagram />,
  //   url: "https://instagram.com/yourpage",
  // },
  {
    key: "fb",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/share/1CTfvpzpDM/",
  },
  {
    key: "whatsapp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/447731830701",
  },
  {
    key: "tiktok",
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@soapy.suds.shine?_r=1&_t=ZN-95xtjJfPTd8",
  },
  // {
  //   key: "youtube",
  //   icon: <FaYoutube />,
  //   url: "https://youtube.com/yourchannel",
  // },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#e3eef8] pt-12 sm:pt-14">
      <div className="container-custom px-4 sm:px-6 relative z-10">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <img src={logo} alt="Soapy" className="mb-5 h-12 w-auto" />
            <p className="text-sm leading-7 text-muted">
              State-of-the-art large capacity machines available in-store now.
              Perfect for handling bigger laundry loads including duvets,
              quilts, bedding, curtains, carpets and more.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-brand">
              Contact Info
            </h4>

            <div className="space-y-4 text-sm text-muted">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 h-5 w-5 text-brand" />
                <span>3 Quinton Parade, Coventry, CV3 5HW, UK</span>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="h-5 w-5 text-brand" />
                <span>02476502101</span>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="h-5 w-5 text-brand" />
                <span>WhatsApp: +44 7731830701</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="h-5 w-5 text-brand" />
                <span className="break-all">
                  soapysudsshinelaundry@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-brand">
              Opening Hours
            </h4>

            <div className="space-y-3 text-sm text-muted">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>7:30 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-brand">Follow Us</h4>

            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.key}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-brand text-lg transition hover:-translate-y-1 hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-300 py-5 text-center text-xs text-muted mb-20">
          © 2026 Soapy Suds Shine Laundry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

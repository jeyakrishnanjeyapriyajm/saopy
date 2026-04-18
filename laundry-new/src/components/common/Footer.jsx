import { logo, insta, fb, twitter, utube } from "../../assets";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const socialMap = {
  insta,
  fb,
  twitter,
  utube,
};

export default function Footer() {
  const socialIcons = ["insta", "fb", "twitter", "utube"];

  return (
    <footer className="relative overflow-hidden bg-[#e3eef8] pt-12 sm:pt-14">
      <div className="container-custom px-4 sm:px-6 relative z-10">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Description */}
          <div>
            <img src={logo} alt="Soapy" className="mb-5 h-12 w-auto" />
            <p className="text-sm leading-7 text-muted">
              State-of-the-art large capacity machines available in-store now.
              Perfect for handling bigger laundry loads including duvets,
              quilts, bedding, curtains, carpets and more.
            </p>
          </div>

          {/* Contact Info */}
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
                <span>WhatsApp: +44 7731 830701</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="h-5 w-5 text-brand" />
                <span className="break-all">info.soapysudsshine@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
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
              {socialIcons.map((key) => (
                <a
                  key={key}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:-translate-y-1"
                >
                  <img src={socialMap[key]} alt={key} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-300 py-5 text-center text-xs text-muted mb-20">
          © 2026 Soapy. All rights reserved. Povered by{" "}
          <a
            href="https://tetravi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            Tetra Vi
          </a>
        </div>
      </div>

      {/* Background Text */}
      <div className="pointer-events-none absolute bottom-[-10px] left-0 w-full overflow-hidden sm:bottom-[-20px] md:bottom-[-35px] lg:bottom-[-50px]">
        <div className="flex justify-center px-4">
          <h2 className="text-center font-extrabold leading-none tracking-tight text-brand/10 text-[48px] xs:text-[60px] sm:text-[90px] md:text-[120px] lg:text-[160px]">
            Soapy Suds
          </h2>
        </div>
      </div>
    </footer>
  );
}

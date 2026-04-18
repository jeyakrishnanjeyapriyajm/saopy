import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { logo } from "../../assets";
import { navLinks } from "../../data/siteData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="container-custom pt-4 sm:pt-5">
        <div className="flex items-center justify-between gap-4 rounded-full bg-white/90 px-4 py-3 shadow-[var(--color-shadow)] backdrop-blur-md sm:px-5">
          <NavLink to="/" className="shrink-0">
            <img
              src={logo}
              alt="Soapy Suds Shine"
              className="h-9 w-auto sm:h-10 lg:h-11"
            />
          </NavLink>

          <div className="hidden items-center md:flex">
            <nav className="flex items-center gap-1 rounded-full">
              {navLinks?.map((item, index) => {
                const text = item?.name || item?.label || "";
                const path = item?.path || "/";
                const isLast = index === navLinks.length - 1;

                const showDropdown =
                  text.toLowerCase() === "services" ||
                  text.toLowerCase() === "about us";

                if (isLast) {
                  return (
                    <NavLink
                      key={text || index}
                      to={path}
                      className="ml-1 inline-flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:opacity-95"
                      style={{
                        background: "var(--color-primary)",
                        color: "#ffffff",
                      }}
                    >
                      <span>{text}</span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                        <ArrowRight
                          size={16}
                          style={{ color: "var(--color-primary)" }}
                        />
                      </span>
                    </NavLink>
                  );
                }

                return (
                  <NavLink
                    key={text || index}
                    to={path}
                    className={({ isActive }) =>
                      `group inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "font-semibold"
                          : "hover:opacity-90 hover:scale-[1.03]"
                      }`
                    }
                    style={({ isActive }) => ({
                      color: isActive
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                    })}
                  >
                    <span className="relative">
                      {text}
                      <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                    </span>

                    {showDropdown && <ChevronDown size={15} />}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[var(--color-shadow)] md:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} style={{ color: "var(--color-text)" }} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-[340px] bg-white md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between border-b px-5 py-5">
                <img src={logo} alt="Soapy Suds Shine" className="h-9 w-auto" />

                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2"
                  aria-label="Close menu"
                >
                  <X size={20} style={{ color: "var(--color-text)" }} />
                </button>
              </div>

              <nav className="flex flex-col gap-2 px-5 py-5">
                {navLinks?.map((item, index) => {
                  const text = item?.name || item?.label || "";
                  const path = item?.path || "/";
                  const isLast = index === navLinks.length - 1;

                  return (
                    <NavLink
                      key={text || index}
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `rounded-2xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-slate-50"
                            : "hover:bg-slate-50 hover:scale-[1.02]"
                        }`
                      }
                      style={{
                        color: isLast ? "#fff" : "var(--color-text)",
                        background: isLast
                          ? "var(--color-primary)"
                          : "transparent",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{text}</span>
                        {isLast && <ArrowRight size={18} />}
                      </div>
                    </NavLink>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

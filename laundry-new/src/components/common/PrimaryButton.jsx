export default function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:opacity-95 ${className}`}
      style={{
        background: "var(--color-primary)",
      }}
    >
      {children}
    </button>
  );
}

export default function SectionTitle({ title, subtitle, align = "center" }) {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignment}`}>
      <h2 className="text-2xl font-bold leading-tight text-brand sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

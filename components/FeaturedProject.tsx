type Props = {
  label?: string;
  title?: string;
  description?: string;
  tech?: string[];
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
  accent?: string;
  reverse?: boolean;
};

// โปรเจกต์เด่น 1 ชิ้น: ข้อความซ้าย ภาพหน้าเว็บขวา
export default function FeaturedProject({
  label = "Featured project",
  title = "StudyBuddy",
  description = "A website that matches students who want to study the same subject. I designed it in Figma, built it with Next.js and tested it with 30 friends.",
  tech = ["Next.js", "Tailwind CSS", "Vercel"],
  image,
  demoUrl = "#",
  codeUrl = "#",
  accent = "#8b5cf6",
  reverse = false,

}: Props) {
  return (
    <div className="px-6 py-10">
      <div className="mx-auto grid max-w-5xl items-center gap-10 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-8 md:grid-cols-5 md:p-12">
        <div className={`md:col-span-2 ${reverse ? "md:order-2" : ""}`}>
          <p className="text-base font-medium" style={{ color: accent }}>
            {label}
          </p>
          <h3 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 lg:text-5xl">{title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600 lg:text-xl">{description}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {tech.map((t) => (
              <li key={t} className="rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-sm text-neutral-700">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3">
            <a
              href={demoUrl}
              className="rounded-lg px-5 py-2.5 text-base font-medium text-white transition hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              Live demo
            </a>
            <a
              href={codeUrl}
              className="rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-base font-medium text-neutral-900 transition hover:bg-neutral-100"
            >
              Source code
            </a>
          </div>
        </div>

        {/* กรอบหน้าต่างเบราว์เซอร์ ใส่ภาพหน้าเว็บของคุณผ่าน prop image */}
        <div className="md:col-span-3">
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl">
            <div className="flex gap-1.5 border-b border-neutral-200 px-4 py-3">
              <span className="size-2.5 rounded-full bg-neutral-300" />
              <span className="size-2.5 rounded-full bg-neutral-300" />
              <span className="size-2.5 rounded-full bg-neutral-300" />
            </div>
            {image ? (
              <img src={image} alt={title} className="aspect-[16/10] w-full object-cover object-top" />
            ) : (
              <div
                className="aspect-[16/10] w-full"
                style={{ background: `linear-gradient(135deg, ${accent}, #fde68a)` }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

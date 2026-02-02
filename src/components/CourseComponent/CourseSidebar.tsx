import Link from "next/link";

interface CourseSidebarProps {
  title?: string;
  features: string[];
  ctaLabel?: string;
  ctaHref: string;
  className?: string;
}

export default function CourseSidebar({
  title = "Course Features",
  features,
  ctaLabel = "Buy Now",
  ctaHref,
  className = "",
}: CourseSidebarProps) {
  return (
    <aside className={className}>
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          {features.map((item, idx) => (
            <li key={`${item}-${idx}`} className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href={ctaHref}
          className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-purple-600 px-4 py-2.5 font-semibold text-white hover:bg-purple-700 transition"
        >
          {ctaLabel}
        </Link>
      </div>
    </aside>
  );
}

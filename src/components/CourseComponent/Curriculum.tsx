type CurriculumModule = {
  title: string;
  lessons?: string[]; // اختياري: إذا بدك تفصيل جوّا كل module
};

interface CurriculumProps {
  title?: string;
  modules: CurriculumModule[];
  className?: string;
}

export default function Curriculum({
  title = "Course Curriculum Breakdown",
  modules,
  className = "",
}: CurriculumProps) {
  return (
    <section className={`bg-white rounded-xl shadow p-5 ${className}`}>
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

      <div className="mt-4 space-y-3">
        {modules.map((m, i) => (
          <details
            key={`${m.title}-${i}`}
            className="group rounded-xl border border-gray-100 px-4 py-3"
          >
            <summary className="cursor-pointer list-none font-medium text-gray-800 flex items-center justify-between">
              <span>
                Module {i + 1}: {m.title}
              </span>
              <span className="text-gray-400 group-open:rotate-180 transition">
                ▾
              </span>
            </summary>

            {m.lessons?.length ? (
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {m.lessons.map((lesson, idx) => (
                  <li key={`${lesson}-${idx}`} className="flex gap-2">
                    <span className="text-purple-600">•</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </details>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  id: number | string;
  name: string;
  message: string;
  role?: string;
  avatar?: string;
};

export default function Testimonials() {
  const [data, setData] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadTestimonials() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("http://localhost:4000/testimonials", {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`Request failed: ${res.status}`);

        const json = await res.json();

        const list: Testimonial[] = Array.isArray(json)
          ? json
          : Array.isArray(json?.testimonials)
          ? json.testimonials
          : [];

        setData(list);
      } catch (e: any) {
        if (e?.name !== "AbortError") {
          setError(e?.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    }

    loadTestimonials();
    return () => controller.abort();
  }, []);

  return (
    <section className="px-10 py-20 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-10">
        What Our Learners Are Saying
      </h2>

      {loading && (
        <div className="text-center text-gray-600">Loading testimonials...</div>
      )}

      {!loading && error && (
        <div className="text-center text-red-600">
          Failed to load testimonials: {error}
        </div>
      )}

      {!loading && !error && data.length === 0 && (
        <div className="text-center text-gray-600">No testimonials yet.</div>
      )}

      {!loading && !error && data.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600">{t.message}</p>
              <h4 className="mt-4 font-semibold">{t.name}</h4>
              {t.role && <p className="text-sm text-gray-500">{t.role}</p>}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

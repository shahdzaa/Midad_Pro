export default function Testimonials() {
  return (
    <section className="px-10 py-20 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-10">
        What Our Learners Are Saying
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600">
              Amazing learning experience. The courses are practical and clear.
            </p>
            <h4 className="mt-4 font-semibold">Sarah Collins</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

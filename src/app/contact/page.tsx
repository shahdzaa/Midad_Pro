"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    await new Promise((r) => setTimeout(r, 800));

    setLoading(false);
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="px-10 py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-purple-700 mb-2">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Let’s talk — we’d love to hear from you.
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Send a message and we’ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-10 py-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="rounded-2xl border p-6 bg-white">
            <h2 className="text-2xl font-bold mb-3">Get in touch</h2>
            <p className="text-gray-600 mb-6">
              You can reach us via email or phone, or just use the form.
            </p>

            <div className="space-y-4 text-gray-700">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">support@yourdomain.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">+1 (000) 000-0000</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Working hours</p>
                <p className="font-medium">Mon – Fri, 9:00 AM – 6:00 PM</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">
                  Your City, Your Street, Building 10
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-purple-50 p-5">
              <p className="font-semibold text-purple-800 mb-1">
                Quick tip
              </p>
              <p className="text-purple-900/80">
                If your message is about a course, include the course name or ID
                to help us respond faster.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border p-6 bg-white">
            <h2 className="text-2xl font-bold mb-3">Send a message</h2>
            <p className="text-gray-600 mb-6">
              Fill the form below and we’ll reply soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Full name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="john@email.com"
                    className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-200"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600">Subject</label>
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-200"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-purple-600 text-white font-semibold py-3 hover:bg-purple-700 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {sent && (
                <p className="text-sm text-green-600">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-10 py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto rounded-2xl border bg-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-1">Need quick help?</h3>
            <p className="text-gray-600">
              Check the courses page or send us a message with details.
            </p>
          </div>
          <a
            href="/courses"
            className="px-5 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
          >
            Browse Courses
          </a>
        </div>
      </section>
    </main>
  );
}

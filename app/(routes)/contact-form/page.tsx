"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      await fetch("https://formsubmit.co/482c6f30a24b979d50aa7f1e5d81c888", {
        method: "POST",
        body: formData,
      });

      setSubmitted(true);
      e.target.reset();
    } catch (err) {
      alert("❌ Failed to send message");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">

      {/* THANK YOU SCREEN */}
      {submitted ? (
        <div className="w-full max-w-md bg-white border border-gray-200 shadow-2xl rounded-2xl p-8 text-center space-y-4">
          <div className="text-5xl">🎉</div>

          <h1 className="text-2xl font-bold text-gray-900">
            Thank You!
          </h1>

          <p className="text-gray-600">
            Your message has been sent successfully.  
            We will contact you soon.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 bg-[#625FD0] text-white px-6 py-2 rounded-lg hover:opacity-90"
          >
            Send Another Message
          </button>
        </div>
      ) : (

        /* FORM */
        <div className="w-full max-w-xl bg-white border border-gray-200 shadow-2xl rounded-2xl p-8 space-y-5">
          <h1 className="text-3xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="text-gray-600">
            Send us a message and we’ll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#625FD0]"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#625FD0]"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#625FD0]"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#625FD0]"
            />

            {/* Hidden config */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Message from Website 🚀"
            />
            <input type="hidden" name="_template" value="table" />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#625FD0] text-white p-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
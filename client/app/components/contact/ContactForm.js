"use client";

const ContactForm = () => {
  return (
    <div className="border rounded-2xl shadow-md p-10 bg-white">
      <h2 className="text-[28px] font-semibold text-black_main">
        Just Say Hello!
      </h2>

      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        Do you fancy saying hi to me or you want to get started with your
        project? Feel free to contact me anytime.
      </p>

      <form className="mt-8 space-y-5">
        {/* ====== name & email ============= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            required
            placeholder="Your Name"
            className="border px-4 py-3 rounded-lg text-sm focus:outline-primary_color"
          />

          <input
            name="email"
            required
            placeholder="Email Address"
            className="border px-4 py-3 rounded-lg text-sm focus:outline-primary_color"
          />
        </div>

        {/* ====== message ============= */}
        <input
          name="message"
          required
          placeholder="Subjects"
          className="border px-4 py-3 rounded-lg text-sm w-full focus:outline-primary_color"
        />

        {/* ====== subject ============= */}
        <textarea
          name="subject"
          required
          placeholder="Hello!"
          rows="4"
          className="border px-4 py-3 rounded-lg text-sm w-full resize-none focus:outline-primary_color"
        />

        {/* ====== send message button ============= */}
        <button
          type="submit"
          className="bg-primary_color text-white px-8 py-3 rounded-full hover:bg-hardprimary transition font-medium text-sm cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm
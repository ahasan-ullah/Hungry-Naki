const ContactUs = () => (
  <section id="contact" className="py-12 text-white md:-mt-28">
    <h2 className="text-3xl font-bold text-center text-black">Contact Us</h2>
    <p className="my-5 text-gray-500 text-center">
      We’re here to help! Reach out to us with your queries or feedback.
    </p>
    <div>
      <form className="mt-6 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          placeholder="Your Message"
          className="border rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
        <button className="w-full bg-error text-white py-3 rounded-lg hover:bg-blue-500 transition">
          Submit
        </button>
      </form>
    </div>
  </section>
);
export default ContactUs;

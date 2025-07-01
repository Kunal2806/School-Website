

function Contact() {
  return (
    <section className="bg-gray-100 px-6 py-12 md:px-16 lg:px-24 text-[#1c2b4a]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            For any inquiries, admissions, or support-related questions, feel free to get in touch with us. We're here to help!
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-semibold">School Address</h2>
            <p className="text-lg">
              Near Power House,<br />
              Pindwara, Dist-Sirohi, Rajasthan<br />
              PIN: 307022
            </p>
            <p className="text-lg font-medium">Mobile:- 9982109201,9414448254 <br/> Email:- vsspindwara@gmail.com</p>
          </div>

        </div>

        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Send a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#1c2b4a] hover:bg-[#334472] text-white font-semibold py-2 px-6 rounded"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="mt-12">
        <iframe
          title="School Location"
          src="https://www.google.com/maps?q=Vivekanand%20Shikshan%20Sansthan%20Pindwara%20Sirohi%20Rajasthan&output=embed"
          width="100%"
          height="350"
          className="border-0 rounded-md shadow-md"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;

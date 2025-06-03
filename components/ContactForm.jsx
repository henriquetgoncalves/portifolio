export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mayvlgyy"
      method="POST"
      className="max-w-md mx-auto p-4 space-y-2"
      id="contact"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Send
      </button>
    </form>
  );
}

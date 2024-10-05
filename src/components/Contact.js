import { useState } from "react";
import { CONTACT_IMG } from "../utils/constants";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    // Clear the fields after submitting
    setName("");
    setEmail("");
    setMessageContent("");
  };

  return (
    <div className="w-8/12 mt-16 mx-auto h-full flex flex-col items-center justify-center">
      <h1 className="text-center font-bold mb-8">Contact us</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-14">
        <div className="w-full sm:w-6/12 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="border-2 border-orange-200 rounded-md p-2"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="border-2 border-orange-200 rounded-md p-2"
            />
            <textarea
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              placeholder="Type your Message here..."
              required
              className="border-2 border-orange-200 rounded-md p-2"
            ></textarea>
            <button type="submit" className="rounded-md p-2 bg-orange-500 text-white">
              Submit
            </button>
            {message && (
              <span className="mt-4 text-center">
                Thanks for contacting OmniFood, We will reply Soon.
              </span>
            )}
          </form>
        </div>
        <div className="hidden sm:block sm:w-6/12">
          <img src={CONTACT_IMG} alt="Contact us" className="max-w-full h-auto" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

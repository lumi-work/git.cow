import React from "react";

function Contact() {
  return (
    <div className="mt-48 mb-48 w-full">
      <input
        type="text"
        placeholder="Enter your email"
        className="w-full text-3xl rounded-md p-3 focus:outline-none focus:ring-0 focus:border-transparent"
      />
      <button className="bg-black px-8 py-3 text-white text-xl font-semibold rounded-lg mt-5 ml-3 hover:bg-black/90">
        Join our newslatter
      </button>
    </div>
  );
}

export default Contact;

// components/ContactModal/ContactModal.js
import React from "react";

const ContactModal = ({ toggleContactModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <p>Email: ayush4567.raj@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ayush-kumar-671231240/"
            target="_blank"
            className="text-blue-500"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
        <p>Contact No: +91-7324929816</p>
        <button
          className="mt-4 bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-full"
          onClick={toggleContactModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;

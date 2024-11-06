// AboutModal.js
import React from "react";

const AboutModal = ({ toggleAboutModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-green-700">About the Password Manager</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Secure Password Storage:</strong> Safely store and manage your passwords in an encrypted vault.
          </li>
          <li>
            <strong>One-Click Access:</strong> Retrieve your stored passwords instantly without the need to remember them.
          </li>
          <li>
            <strong>Multi-Platform Support:</strong> Available on web, mobile, and desktop applications.
          </li>
         
        </ul>
        <h3 className="text-lg font-bold mt-4 text-green-700">Why Use This Application?</h3>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Increases security by avoiding weak or reused passwords.</li>
          <li>Eliminates the need to remember multiple passwords.</li>
          <li>Protects your sensitive information from online threats.</li>
          <li>Provides convenience by storing all credentials in one place.</li>
        </ul>
        <button
          onClick={toggleAboutModal}
          className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AboutModal;

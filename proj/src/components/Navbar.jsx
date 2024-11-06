// import React from "react";
// import React, { useState } from "react";
// import ContactModal from "./ContactModal";

// const Navbar = () => {
//   const [showContactModal, setShowContactModal] = useState(false);

//   const toggleContactModal = () => {
//     setShowContactModal(!showContactModal);
//   };
//   return (
//     <nav
//       className="   bg-slate-800 text-white
//     " >
//       <div className="mycontainer  flex justify-between items-center px-4 py-5 h-14">
//         <div className="logo font-bold text-white text-2xl">
//           <span className="text-green-700">&lt;</span>

//           <span>Pass</span>
//           <span className="text-green-700">OP/&get;</span>
//         </div>
//         <ul>
//           <li className="flex gap-4">
//             <a href="/">Home</a>
//             <a href="#">About</a>
//             <a href="#">Contact</a>
//           </li>
//         </ul>
//         <button className="text-white bg-green-700 px-4 py-2 rounded-full flex justify-between items-center hover:bg-green-600">
//         <img className="invert w-10 h-10" src="./public/github" alt = "github logo"/>
//         <span className="font-bold px-2">GitHub</span>
//         </button>
//       </div>
//       <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
//       <div className="text-lg font-bold">My App</div>
//       <ul className="flex gap-4">
//         <li>
//           <button
//             className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-full"
//             onClick={toggleContactModal}
//           >
//             Contact
//           </button>
//         </li>
//       </ul>
//     </nav>

//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import ContactModal from "./ContactModal";

// const Navbar = () => {
//   const [showContactModal, setShowContactModal] = useState(false);

//   const toggleContactModal = () => {
//     setShowContactModal(!showContactModal);
//   };

//   return (
//     <>
//       <nav className="bg-slate-800 text-white">
//         <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
//           <div className="logo font-bold text-white text-2xl">
//             <span className="text-green-700">&lt;</span>
//             <span>Pass</span>
//             <span className="text-green-700">OP/&gt;</span>
//           </div>
//           <ul>
//             <li className="flex gap-4">
             
//             </li>
//           </ul>
//           <button className="text-white bg-green-700 px-4 py-2 rounded-full flex justify-between items-center hover:bg-green-600">
//             <img className="invert w-10 h-10" src="./public/github.png" alt="github logo" />
//             <span className="font-bold px-2">GitHub</span>
//           </button>
//         </div>
//         <div className="flex-grow flex justify-center">
//           <button
//             className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-full"
//             onClick={toggleContactModal}
//           >
//             Contact
//           </button>
//         </div>
//       </nav>

//       {/* Conditionally render ContactModal */}
//       {showContactModal && <ContactModal toggleContactModal={toggleContactModal} />}
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import ContactModal from "./ContactModal";
import AboutModal from "./AboutModal"; // Import the new AboutModal component

const Navbar = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false); // New state for About modal

  const toggleContactModal = () => {
    setShowContactModal(!showContactModal);
  };

  const toggleAboutModal = () => {
    setShowAboutModal(!showAboutModal); // Toggle the About modal
  };

  return (
    <>
      <nav className="bg-slate-800 text-white">
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
          <div className="logo font-bold text-white text-2xl">
            <span className="text-green-700">&lt;</span>
            <span>Pass</span>
            <span className="text-green-700">OP/&gt;</span>
          </div>

          {/* Centered buttons for Contact and About with reduced gap */}
          <div className="flex gap-4">
            <button
              className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-full"
              onClick={toggleAboutModal}
            >
              About
            </button>

            <button
              className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-full"
              onClick={toggleContactModal}
            >
              Contact
            </button>
          </div>

          {/* GitHub Button */}
          <a
            href="https://github.com/ak8986"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-white bg-green-700 px-4 py-2 rounded-full flex justify-between items-center hover:bg-green-600">
              <img className="invert w-10 h-10" src="./public/github.png" alt="github logo" />
              <span className="font-bold px-2">GitHub</span>
            </button>
          </a>
        </div>
      </nav>

      {/* Conditionally render ContactModal */}
      {showContactModal && <ContactModal toggleContactModal={toggleContactModal} />}

      {/* Conditionally render AboutModal */}
      {showAboutModal && <AboutModal toggleAboutModal={toggleAboutModal} />}
    </>
  );
};

export default Navbar;

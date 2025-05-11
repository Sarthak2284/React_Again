import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Card({ username = "NIL", role = "Role", btnText = "Hire Me", imgLink }) {
  return (
    <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 mx-auto my-4 hover:shadow-2xl transition duration-300">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        
        {/* LEFT: Image + Button */}
        <div className="flex flex-col items-center">
          <img
            className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
            src={imgLink}
            alt="Profile"
          />
          <button className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">
            {btnText}
          </button>
        </div>

        {/* RIGHT: Info Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-semibold text-black">{username}</h2>
          <p className="text-sm text-gray-500">{role}</p>
          <p className="text-gray-700 mt-3 text-sm max-w-md">
            Passionate about justice, logic, and uncovering the truth. Always seeking the hidden layer.
          </p>
          <div className="flex justify-center lg:justify-start mt-4 space-x-4 text-blue-500 text-lg">
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

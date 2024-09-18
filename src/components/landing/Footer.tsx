import React from "react";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-white py-4 flex justify-between items-center px-10 border-t border-gray-200 mb-10 mt-24 w-full">
      <div className="text-gray-600">
        <p>© 2024 gitCow.</p>
        <div className="flex space-x-2 text-sm">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
        </div>
      </div>
      <div>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          <FaTwitter
            size={24}
            className="p-1 rounded-full border border-gray-200 hover:bg-gray-100"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;

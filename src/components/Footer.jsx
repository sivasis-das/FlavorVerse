import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "./Button";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-white bg_gradient  ">
      <div className="container mx-auto px-20 lg:px-20  flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800 text-center md:text-start">
        <div className="flex  justify-center ">
          <p className="font-bold text-center text-xl ">
            Flavor<span className="text-green-700">Verse</span>
          </p>
        </div>

        <div className="text-center">
          <p className="text-green-700 font-semibold">Quick Links</p>

          <div className="flex flex-col md:text-start text-center mb-4 md:mb-0 ">
            <a
              href="#"
              className="block md:inline-block py-2  hover:text-green-500"
            >
              Home
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-green-500"
            >
              About
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-green-500"
            >
              Services
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-green-500"
            >
              Contact
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-green-500"
            >
              Chiefs
            </a>
          </div>
        </div>

        <div>
          <p className="text-green-700 font-semibold">Legal</p>
          <div className="flex flex-col md:text-start text-center mb-4 md:mb-0 text-[14px]">
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-green-500"
            >
              Terms and Conditions
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-green-500"
            >
              License Agreement
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-green-500"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-green-500"
            >
              Copyright Information
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-green-500"
            >
              Cookies Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col ">
          <p className="text-green-700 font-semibold">Social Media</p>
          <div className="flex justify-center mt-4 gap-3">
            <a
              href="#"
              className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-green-500 hover:scale-110"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="bg-pink-600 p-1.5 rounded-sm text-white hover:text-green-500 hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-green-500 hover:scale-110"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="bg-red-600 p-1.5 rounded-sm text-white hover:scale-110"
            >
              <FaYoutube size={18} />
            </a>
          </div>

          
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <span className="text-gray-400 leading-10">Sivasis Das &copy; {year}</span>
      </div>
    </footer>
  );
}

export default Footer;

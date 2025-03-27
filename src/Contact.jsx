import React from 'react';
import { FaTwitter, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div id="contact" className="h-screen flex flex-col items-center bg-black text-white p-6">
      
      {/* Contact Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-24">Contact</h1>

      {/* Main Content Container */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12">
        
        {/* Left Side - Inquiry Form */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between min-h-[400px]">
          <h2 className="text-3xl font-bold mb-4 text-black">Get in Touch</h2>
          <form className="flex flex-col gap-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-4 rounded bg-black text-white focus:outline-none"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-4 rounded bg-black text-white focus:outline-none"
            />
            <textarea 
              rows="6" 
              placeholder="Your Message" 
              className="p-4 rounded bg-black text-white focus:outline-none"
            />
            <button className="bg-lime-500 hover:bg-blue-600 text-white py-3 px-4 rounded transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Description & Social Icons */}
        <div className="w-full md:w-1/2 flex flex-col ">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-lime-400">Let's Connect</h2>
            <p className="text-gray-300">
              Feel free to reach out for any inquiries or collaborations. I'm happy to discuss new opportunities!
            </p>
          </div>

          {/* Social Icons - Now Closer to Text */}
          <div className="flex gap-6 mt-6">
            <a href="https://twitter.com/Aniket_d04" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={35} className="hover:text-lime-400 transition" />
            </a>
            <a href="mailto:aniketdhaygude4@gmail.com">
              <FaEnvelope size={35} className="hover:text-lime-400 transition" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;

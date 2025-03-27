import React, { useState, useEffect } from "react";

function Navbar() {
  const [selected, setSelected] = useState("Home"); // Track active link
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

  // Function to update scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (option) => {
    setSelected(option);
  };

  return (
    <div
      className={`fixed top-0 w-full z-10 transition-all duration-300 
        ${isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-black"} 
        text-white flex justify-between items-center px-12 py-6 border-b border-white`}
    >
      {/* Logo */}
      <h1 className="text-4xl font-bold text-lime-400"> <a  href="/">Wewin </a></h1>

      {/* Navigation Links */}
      <ul className="flex gap-16 text-xl font-semibold">
        {["Home", "Service", "Contact"].map((item) => (
          <a
            key={item}
            href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
            onClick={() => handleChange(item)}
            className={`cursor-pointer ${
              selected === item ? "text-lime-400" : "text-white"
            }`}
          >
            {item}
          </a>
        ))}
      </ul>

      {/* Hire Me Button */}
      <a href="#contact" className="bg-lime-400 text-white px-6 py-2 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all">
      Hire Me
    </a>

    </div>
  );
}

export default Navbar;

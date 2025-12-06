import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} CineSeek. All rights reserved.
    </footer>
  );
};

export default Footer;

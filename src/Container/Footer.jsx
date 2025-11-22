import React from "react";
import '../index.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <p className="mb-0">© {new Date().getFullYear()} TasteCraft Restaurant</p>
      <small>Designed & Developed by Mahesha V P</small>
    </footer>
  );
};

export default Footer;

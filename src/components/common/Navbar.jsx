import React, { useEffect, useState } from "react";
import "../../styles/home/navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = ["Home", "About", "Trip Catalog", "Contact", "Tour Review"];
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initialize
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className="nav-Container">
      <div className="navText">Travel Smart</div>

      {/* Hamburger icon for smaller screens */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
      <RxHamburgerMenu />
      </div>

      <div className={`navItems ${isMobile && isOpen ? "showMenu" : ""}`}>
        {navItems.map((item, index) => (
          <p key={index} className="navItem">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

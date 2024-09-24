import React, { useEffect, useState } from "react";
import "../../styles/home/navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { page: "Home", link: "/" },
    { page: "About", link: "/about" },
    { page: "Trip Catalog", link: "*" },
    { page: "Contact", link: "/contact" },
    { page: "Tour Review", link: "*" },
  ];

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
          <Link to={item.link} key={index} className="navItem">
            {item.page}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

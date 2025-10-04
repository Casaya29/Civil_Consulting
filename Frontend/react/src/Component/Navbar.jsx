import React, { useState, useEffect } from "react";
import "../style/Navbar.css";
import logo from"../assets/Logo.JPG"

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scroll hacia abajo → ocultar navbar
      setShow(false);
    } else {
      // Scroll hacia arriba → mostrar navbar
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? "navbar-show" : "navbar-hide"}`}>
      <div className="navbar-logo">
  <img src={logo} alt="Civil Consulting" className="logo" />
</div>

      <ul className="navbar-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#myv">Misión y Visión</a></li>
        <li><a href="#contacto">Contáctanos</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import "../style/Footer.css";
import linkedin from "../assets/icon/linkedin.png";
import llamada from "../assets/icon/llamada.png";
import sobre from "../assets/icon/sobre.png";
import whatsapp from "../assets/icon/whatsapp.png";

function Footer() {
  return (
<footer className="footer">
  <div className="footer-top">
    <ul className="footer-links">
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#nosotros">Nosotros</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#myv">Misión y Visión</a></li>
      <li><a href="#contactanos">Contáctanos</a></li>
    </ul>
  </div>

  <div className="footer-icons">
    <a href="https://linkedin.com" target="_blank"><img src={linkedin} alt="LinkedIn" className="icon" /></a>
    <a href="https://wa.me/message/3SJNV7RXUOJAJ1"><img src={whatsapp} alt="WhatsApp" className="icon" /></a>
    <a href="mailto:civilasesoria100@gmail.com"><img src={sobre} alt="Email" className="icon" /></a>
  </div>

  <div className="footer-bottom">
    <p>© 2025 Civil Consulting. Todos los derechos reservados.</p>
  </div>
</footer>

  );
}

export default Footer;

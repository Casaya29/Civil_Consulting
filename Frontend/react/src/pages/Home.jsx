import React, { useState } from "react";
import "../style/Home.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import MV1 from "../assets/MV1.jpg";
import MV2 from "../assets/MV2.jpg";
import MV3 from "../assets/MV3.jpg";
import plano from "../assets/icon/plano.png";
import construccion from "../assets/icon/construccion-de-casas.png";
import Formulacion from "../assets/icon/lapiz-regla.png";
import Busqueda from "../assets/icon/Busqueda.png";

function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // ✅ Tu backend devuelve texto, no JSON
      const data = await response.text();

      if (response.ok) {
        alert("✅ Correo enviado correctamente");
        console.log("Respuesta del servidor:", data);
        setFormData({ nombre: "", correo: "", mensaje: "" });
      } else {
        console.error("Error del servidor:", data);
        alert("❌ Error al enviar el correo");
      }
    } catch (error) {
      // ✅ Aquí se atrapan errores de red o fetch
      console.error("Error en el envío:", error);
      alert("⚠ Hubo un problema con el servidor");
    }
  };

  return (
    <main className="contenedor-principal">
      <Navbar />

      {/* Hero */}
      <section className="inicio" id="inicio">
        <div className="inicio-content">
          <h2>Evaluación y Diseño de Proyectos de Infraestructura y Arquitectura</h2>
          <p>Transformando ideas en realidades tangibles con soluciones innovadoras y sostenibles</p>
        </div>
      </section>

      {/* About */}
      <section className="nosotros" id="nosotros">
        <div className="nosotros-content">
          <h2>Nuestra empresa</h2>
          <p>
            Somos especialistas en aplicación de softwares de metodología BIM 
            para la creación y gestión de proyectos de Ingeniería.
          </p>
          <blockquote>
            “Aprende todo lo necesario para que tu vida sea más feliz”
          </blockquote>
        </div>
      </section>

      {/* Services */}
      <section className="servicios" id="servicios">
        <h2>Servicios</h2>
        <div className="servicios-grid">
          <div className="card">
            <img src={plano} alt="plano" />
            <h3>Diseño Arquitectónico</h3>
            <p>Anteproyectos, Proyectos y Supervisión de Obras.</p>
          </div>
          <div className="card">
            <img src={construccion} alt="construccion" />
            <h3>Diseño de Infraestructura</h3>
            <p>Estudios Hidrológicos, Hidráulicos y Viales.</p>
          </div>
          <div className="card">
            <img src={Formulacion} alt="formulacion" />
            <h3>Formulación y Evaluación</h3>
            <p>Estudios de Preinversión, Perfil, Factibilidad.</p>
          </div>
          <div className="card">
            <img src={Busqueda} alt="Busqueda" />
            <h3>Modelado Virtual</h3>
            <p>Simulación en BIM y Supervisión en Obra.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="myv" id="myv">
        <h2>Misión y Visión</h2>
        <div className="mision-grid">
          <div className="card">
            <img src={MV1} alt="Mision" />
            <h3>Misión</h3>
            <p>Brindar servicios orientados al desarrollo de infraestructura sostenible.</p>
          </div>
          <div className="card">
            <img src={MV2} alt="Vision" />
            <h3>Visión</h3>
            <p>Ser reconocidos como empresa líder en proyectos de construcción sostenibles.</p>
          </div>
          <div className="card">
            <img src={MV3} alt="Valores" />
            <h3>Valores</h3>
            <p>Compromiso, responsabilidad, innovación y respeto al medio ambiente.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contactanos" id="contacto">
        <h2>Habla con nosotros</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Escribe tu nombre"
              required
            />
          </label>
          <label>
            Correo electrónico
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Escribe tu correo electrónico"
              required
            />
          </label>
          <label>
            Mensaje
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Escribe un mensaje"
              required
            ></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </section>

      <Footer />
    </main>
  );
}

export default Home;

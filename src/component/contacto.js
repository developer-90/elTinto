import React from 'react'
import { FaInstagram } from 'react-icons/fa';

export const Contacto = () => {

  return (
    <div className='container'>
      <div>
        <h1 className="titulo-contacto">¡Bienvenidos!</h1>
        <p className="lead">Nos encanta saber de ti. No dudes en ponerte en contacto con nosotros.</p>
      </div>
      <hr className='border border-warning border-2 opacity-50 w-75 m-auto mb-3'></hr>
      <div>
        <h4>Datos de Contacto</h4>
        <ul className="list-unstyled mt-3 mb-4 w-75 m-auto text-start">
          <li><strong>Teléfono:</strong> +34 639 23 77 02</li>
          <li><strong>Horario:</strong> pendiente de añadir</li>
          {/* <li><strong>Email:</strong> contacto@nuestraempresa.com</li> */}
          <li><strong>Dirección:</strong> C/ Estrella de Elola, 19, 28341 Valdemoro, Madrid</li>
        </ul>
      </div>

      <div>
        <h4>Ubicación</h4>
        <div className="embed-responsive embed-responsive-16by9 mb-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.7709287052126!2d-3.68017052345397!3d40.191911071476675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd421ec12aa19867%3A0x789c5d6b831e8b38!2sC.%20Estrella%20de%20Elola%2C%2019%2C%2028342%20Valdemoro%2C%20Madrid!5e0!3m2!1ses!2ses!4v1719170566793!5m2!1ses!2ses" title="ubicacion" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div>
        <h4>Redes Sociales</h4>
        <div className="d-flex justify-content-center mb-5">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-2">
            <i className="fab fa-facebook-f"></i> Facebook
          </a> */}
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-info mx-2">
            <i className="fab fa-twitter"></i> Twitter
          </a> */}
          <div className="d-flex justify-content-center mb-5">
          <a href="https://www.instagram.com/eltinto_cafebar/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noopener noreferrer" className="btn-insta">
            <FaInstagram className='m-2'/> Instagram
          </a>
        </div>
          {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-2">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default Contacto;
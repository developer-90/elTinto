import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  '/bandeja paisa.jpg',
  '/chicha.jpg',
  'patacon.jpg',
  'arepas.jpg',
  'empanadas.jpg',
  'burger.jpeg'
];

function Inicio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    arrows: true,
  };

  return (
    <div>
      <div className='container carta'>
        <h1 className='titulo-carta'>El Tinto</h1>
        <p className='descripcion-carta'>
          Si te gusta disfrutar, ven a nuestro cafe/bar.
        </p>

        <hr className='border border-warning border-2 opacity-50 w-75 m-auto mb-3'></hr>

        <div className="carousel-container">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="carousel-slide">
                <img src={src} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>
        </div>

        <div>
          <h4>Disfruta de la mejor experiencia culinaria colombiana en El Tinto</h4>
          <p>
            En nuestro café/bar colombiano, cada platillo es una muestra del sabor auténtico de nuestra tierra. Desde la bandeja paisa hasta las arepas, pasando por las empanadas, todos nuestros platos están acompañados por los mejores cafés y jugos naturales.
          </p>
          <p>
            Nuestra cocina es la más pura expresión de nuestro amor por la gastronomía de calidad y el trabajo bien hecho. Por eso, solo usamos productos de calidad, seleccionados con cuidado para que cada visita sea una experiencia inolvidable. ¡Ven y disfruta de la auténtica cocina colombiana!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;

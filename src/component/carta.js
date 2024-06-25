import React from 'react'
import { BiCloudDownload } from 'react-icons/bi'; // Importar el icono BiCloudDownload desde react-icons/bi


export const Carta = () => {

  const handleDownload = (fileName) => {
    const url = `${process.env.PUBLIC_URL}/${fileName}`;

    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = blobUrl;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error('Error al descargar el archivo:', error);
      });
  };

  return (
    <div>
      <div className='container carta'>
        <h1 className='titulo-carta'>Descubre nuestra Carta</h1>
        <p className='descripcion-carta'>
          Explora una selección exquisita de platos y bebidas, diseñados para satisfacer todos los gustos y ocasiones.
        </p>
      </div>

      <hr className='border border-warning border-2 opacity-50 w-75 m-auto mb-3'></hr>

      <div>
        <div className="menu-images">
          <div className="menu-item">
            {/* <h3>Menú 1</h3> */}
            <img src={`${process.env.PUBLIC_URL}/menu1.png`} alt="Menú 1" className="menu-image mt-5" />
          </div>
          <div className="menu-item">
            {/* <h3>Menú 2</h3> */}
            <img src={`${process.env.PUBLIC_URL}/menu2.png`} alt="Menú 2" className="menu-image mt-3" />
          </div>
        </div>
      </div >

      <div className='container descarga'>
        <p className='descarga-title'>Descubre y disfruta nuestras exquisitas delicias descargando nuestros menús.<br></br>¡Prepárate para compartir momentos inolvidables con los tuyos!</p>
        <div className="botones-descarga">
          <button className="btn-download mx-3" onClick={() => handleDownload('menu1.png')}>
            <BiCloudDownload /> Descargar Menú 1
          </button>
          <button className="btn-download" onClick={() => handleDownload('menu2.png')}>
            <BiCloudDownload /> Descargar Menú 2
          </button>
        </div>
      </div>
    </div >
  )
}

export default Carta;
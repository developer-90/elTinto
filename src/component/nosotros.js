import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Nosotros = () => {
  return (
    <div className='nosotros-container'>
      <h1 className='titulo-nosotros'>Nuestra Pasión por la Gastronomía Colombiana</h1>

      <hr className='border border-warning border-2 opacity-50 w-75 m-auto mb-3'></hr>

      <Container>
        <Row>
          <Col md={6} className='mb-4'>
            <h2 className='subtitulo-nosotros'>Platos Emblemáticos</h2>
            <p className='texto-nosotros'>
              Descubre nuestra selección de platos colombianos más representativos. Cada plato refleja la diversidad cultural y culinaria de Colombia.
            </p>
            <Card className='mb-4'>
              <Card.Img variant='top' src='https://comopreparar.co/wp-content/uploads/2024/05/Bandeja-paisa-500x500.jpg' alt='bandeja-paisa' />
              <Card.Body>
                <Card.Title>Bandeja Paisa</Card.Title>
                <Card.Text>
                  <p><strong>Ingredientes:</strong> Frijoles, arroz, chicharrón, carne molida, huevo, plátano maduro, aguacate.<br />Este plato es una combinación generosa de los ingredientes más típicos de la región paisa.</p>                  
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='mb-4'>
              <Card.Img variant='top' src='https://sweetysalado.com/wp-content/uploads/2015/01/DSC_00388N.jpg' alt='sobrebarriga' />
              <Card.Body>
                <Card.Title>Sobrebarriga</Card.Title>
                <Card.Text>
                  <p><strong>Ingredientes:</strong> Carne de res, cebolla, ajo, tomate, comino.<br />La sobrebarriga es una carne de res cocida lentamente con especias y vegetales hasta que está tierna y jugosa.</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='mb-4'>
              <Card.Img variant='top' src='https://storage.googleapis.com/realfooding-app.appspot.com/recipes/TWpb2qVazRCOqr8bsAYl/main_1647004241782_thumb.jpg?alt=media&token=1716911461119' alt='arepas' />
              <Card.Body>
                <Card.Title>Arepas</Card.Title>
                <Card.Text>
                  <p><strong>Ingredientes:</strong> Harina de maíz, agua, sal, queso (opcional).<br />Las arepas son tortas de maíz que se pueden rellenar con queso o servir como acompañamiento.</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='mb-4'>
              <Card.Img variant='top' src='https://www.tastyaz.com/wp-content/uploads/2021/11/empanadas-3-500x500.jpg' alt='empanadas' />
              <Card.Body>
                <Card.Title>Empanadas</Card.Title>
                <Card.Text>
                  <p><strong>Ingredientes:</strong> Masa de maíz, carne de res, papa, cebolla, ajo.<br />Las empanadas son masas rellenas de carne y papas, fritas hasta que están doradas y crujientes.</p>              
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className='mb-4'>
            <h2 className='subtitulo-nosotros'>Bebidas Tradicionales</h2>
            <p className='texto-nosotros'>
              Sumérgete en la rica tradición de las bebidas colombianas con el Agua de Panela, y la Chicha. Cada bebida ofrece un sabor único y auténtico que complementa nuestros platos.
            </p>
            <Card className='mb-4'>
              <Card.Img variant='top' src='https://okdiario.com/img/2022/07/27/chicha.jpg' alt='chicha' />
              <Card.Body>
                <Card.Title>Chicha</Card.Title>
                <Card.Text>
                  <p><strong>Ingredientes:</strong> Maíz fermentado, azúcar.<br />Bebida tradicional hecha a base de maíz fermentado, conocida por su sabor fuerte y dulce.</p>                  
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='mb-4'>
              <Card.Img variant='top' src='https://okdiario.com/img/2018/05/10/receta-de-aguapanela-620x349.jpg' alt='agua-panela' />
              <Card.Body>
                <Card.Title>Agua de Panela</Card.Title>
                <Card.Text>
                  <p><strong>Ingredientes:</strong> Panela, agua, limón.<br />Bebida refrescante hecha al disolver panela en agua caliente, a menudo servida con limón.</p> 
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='mb-4'>
              <Card.Img variant='top' src='https://s3.amazonaws.com/toasttab/restaurants/restaurant-30306000000000000/menu/items/8/item-500000018668720778_1660317082.jpg' alt='gaseosa-colombiana' />
              <Card.Body>
                <Card.Title>Gaseosa Colombiana</Card.Title>
                <Card.Text>
                  <p><strong>Ingredientes:</strong> Agua carbonatada, azúcar, sabores naturales.<br />Bebida gaseosa tradicional con un sabor único, popular en todo Colombia.</p>                  
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='mb-4'>
              <Card.Img variant='top' src='https://www.postobon.com/sites/default/files/styles/848x600/public/salaprensa/noticia_sala_prensa.jpg?itok=M9hLIwgd' alt='postobon' />
              <Card.Body>
                <Card.Title>Postobón</Card.Title>
                <Card.Text>
                  <p><strong>Ingredientes:</strong> Agua carbonatada, azúcar, saborizantes.<br />Una de las marcas más emblemáticas de Colombia, conocida por sus sabores únicos y refrescantes.</p>                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nosotros;
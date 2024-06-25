import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './component/inicio'
import Nosotros from './component/nosotros'
import Carta from './component/carta'
import Contacto from './component/contacto'
import Footer from './component/footer'
import Navegar from './component/navegar'

function App() {
  return (
      <Router>
        <div className="App">
          < Navegar/>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/carta" element={<Carta />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
        < Footer/>
      </Router>
  );
}

export default App;

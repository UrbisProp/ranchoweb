import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import PropiedadesVenta from './pages/PropiedadesVenta'
import PropiedadesArriendo from './pages/PropiedadesArriendo'
import Administracion from './pages/Administracion'
import Contacto from './pages/Contacto'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/propiedades-venta" element={<PropiedadesVenta />} />
            <Route path="/propiedades-arriendo" element={<PropiedadesArriendo />} />
            <Route path="/administracion" element={<Administracion />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

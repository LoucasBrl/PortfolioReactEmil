import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentation from './pages/Presentation'
import CoffeeMap from './pages/CoffeeMap' // Nouvelle page Map
import Creation from './pages/Creation' // Page dédiée Créations
import Experiences from './pages/Experiences'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import ScrollToHash from './components/ScrollToHash'
import Changement from './pages/Changement'
import './App.css'
import "./i18n/i18n"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={
          <>
            <Presentation />
            <CoffeeMap /> {/* Remplace Galerries/Creation sur la page d'accueil */}
            <Experiences />
            <Contact />
          </>
        } />
        <Route path="/creations" element={<Creation />} />
        <Route path="/changement" element={<Changement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

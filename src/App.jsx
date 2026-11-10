
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Philippines from './pages/Philippines'
import Favorites from './pages/Favorites'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import './App.css'

function App() {
  return (
    <FavoritesProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/philippines" element={<Philippines />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </FavoritesProvider>
  )
}

export default App

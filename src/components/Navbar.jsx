
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="brand">
          <span className="brand-icon">🌿</span>
          <span>WildLens</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" end>
            Explore
          </NavLink>

          <NavLink to="/philippines">
            Philippines
          </NavLink>

          <NavLink to="/favorites">
            Favorites
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

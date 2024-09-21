import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <img alt="logo-img" />
                </div>

                <NavLink to="/">
                    <span>SuperTravel</span>
                </NavLink>
            </div>

            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/countries">Countries</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>

                </ul>
            </nav>
        </div>
    </header>
  )
}

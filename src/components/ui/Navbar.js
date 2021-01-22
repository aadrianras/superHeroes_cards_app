import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar_top">

            <Link
                id="logo"
                className="navbar_link"
                to="/"
            >
                HEROES APP
            </Link>

            <div className="nav_container">

                <NavLink
                    activeClassName="active"
                    className="navbar_link"
                    exact
                    to="/marvel"
                >
                    Marvel
                    </NavLink>

                <NavLink
                    activeClassName="active"
                    className="navbar_link"
                    exact
                    to="/dc"
                >
                    DC
                    </NavLink>

                <NavLink
                    activeClassName="active"
                    className="navbar_link"
                    exact
                    to="/search"
                >
                    Buscador
                </NavLink>

            </div>

            <NavLink
                activeClassName="active"
                className="navbar_link logout"
                exact
                to="/login"
            >
                Logout
            </NavLink>


        </nav>
    )
}
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './primary-header.scss'

export const PrimaryHeader = React.forwardRef<HTMLHeadElement>((props, ref) => (
  <header ref={ref} className="primary-header headroom">
    <div className="primary-header__container">
      <h1 className="primary-header__title">
        <Link to="/">GOT</Link>
      </h1>

      <nav className="primary-header__nav">
        <NavLink to="/" activeClassName="active">
          Books
        </NavLink>
        <NavLink to="/houses" activeClassName="active">
          Houses
        </NavLink>
        <NavLink to="/characters" activeClassName="active">
          Characters
        </NavLink>
      </nav>
    </div>
  </header>
))

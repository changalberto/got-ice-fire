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
        <NavLink exact to="/" className="primary-header__nav__item" activeClassName="primary-header__nav__item--active">
          Books
        </NavLink>
        <NavLink to="/houses" className="primary-header__nav__item" activeClassName="primary-header__nav__item--active">
          Houses
        </NavLink>
        <NavLink
          to="/characters"
          className="primary-header__nav__item"
          activeClassName="primary-header__nav__item--active"
        >
          Characters
        </NavLink>
      </nav>
    </div>
  </header>
))

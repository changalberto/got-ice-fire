import React from 'react'
import { Link, useRoute } from 'wouter'
import cn from 'classnames'

import './primary-header.scss'

type NavItemProps = {
  href: string
  children: any
}

const NavItem = ({ href, children }: NavItemProps) => {
  const [isActive] = useRoute(href)
  return isActive ? (
    <span className={cn('primary-header__nav__item', { 'primary-header__nav__item--active': isActive })}>
      {children}
    </span>
  ) : (
    <Link href={href}>
      <a className={cn('primary-header__nav__item', { 'primary-header__nav__item--active': isActive })} href={href}>
        {children}
      </a>
    </Link>
  )
}

export const PrimaryHeader = React.forwardRef<HTMLHeadElement>((props, ref) => (
  <header ref={ref} className="primary-header headroom">
    <div className="primary-header__container">
      <h1 className="primary-header__title">
        <Link href="/">GOT</Link>
      </h1>

      <nav className="primary-header__nav">
        <NavItem href="/">Books</NavItem>
        <NavItem href="/houses">Houses</NavItem>
        <NavItem href="/characters">Characters</NavItem>
      </nav>
    </div>
  </header>
))

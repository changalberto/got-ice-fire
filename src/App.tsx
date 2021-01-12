import React from 'react'
import { Link, useRoute } from 'wouter'

import Routes from './Routes'

type NavItemProps = {
  href: string
  children: any
}

const NavItem = ({ href, children }: NavItemProps) => {
  const [isActive] = useRoute(href)
  return (
    <Link href={href}>
      <a className={isActive ? 'active' : ''} href={href}>
        {children}
      </a>
    </Link>
  )
}

const App = () => {
  return (
    <>
      <nav>
        <NavItem href="/">Books</NavItem>
        <NavItem href="/houses">Houses</NavItem>
        <NavItem href="/characters">Characters</NavItem>
      </nav>
      <Routes />
    </>
  )
}

export default App

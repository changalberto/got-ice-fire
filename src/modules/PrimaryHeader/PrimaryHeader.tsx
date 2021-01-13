import React from 'react'
import { Link, useRoute } from 'wouter'

type NavItemProps = {
  href: string
  children: any
}

const NavItem = ({ href, children }: NavItemProps) => {
  const [isActive] = useRoute(href)
  return isActive ? (
    <span>{children}</span>
  ) : (
    <Link href={href}>
      <a className={isActive ? 'active' : ''} href={href}>
        {children}
      </a>
    </Link>
  )
}

export const PrimaryHeader = () => (
  <nav>
    <NavItem href="/">Books</NavItem>
    <NavItem href="/houses">Houses</NavItem>
    <NavItem href="/characters">Characters</NavItem>
  </nav>
)

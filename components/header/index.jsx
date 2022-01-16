import Link from "next/link"
import NavLink from "./NavLink"

export default function Header() {
  return (
    <header className="h-24 z-50">
      <div className="header-container">
        <h2 className="logo">
          <Link href="/">
            <a>
              <span className="highlight">Swift</span>web Digital
            </a>
          </Link>
        </h2>
        <nav className="hidden lg:block">
          <NavLink href="/">
            <a className="nav-link">Home</a>
          </NavLink>
          <NavLink href="/blog">
            <a className="nav-link">Blog</a>
          </NavLink>
          <NavLink href="/music">
            <a className="nav-link">Music</a>
          </NavLink>
          <NavLink href="/websites">
            <a className="nav-link">Websites</a>
          </NavLink>
          <NavLink href="/contact">
            <a className="nav-link">Contact</a>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

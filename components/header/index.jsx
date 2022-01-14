import Link from "next/link"
import NavLink from "./NavLink"

export default function Header() {
  return (
    <header className="h-16 bg-white dark:bg-dark fixed w-screen z-50 shadow-sm">
      <div className="container h-full flex items-center justify-between">
        <h2 className="text-4xl font-extrabold lowercase font-display tracking-wide text-primary-base hover:text-primary-dark">
          <Link href="/">Gorimor</Link>
        </h2>
        <nav>
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

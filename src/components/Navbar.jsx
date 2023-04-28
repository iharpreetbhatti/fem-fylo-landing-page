import logo from "../assets/logo.svg"

function Navbar({ links }) {
  return (
    <nav className="navbar flex items-center justify-between py-6">
      <div className="navbar-logo">
        <img
          className="logo w-20"
          src={logo}
          alt="Fylo Logo"
          title="Fylo Logo"
        />
      </div>
      <div className="navbar-links font-raleway text-sm w-1/2 md:w-1/3 lg:w-1/5">
        <ul className="flex justify-between">
          {links &&
            links.map(link => (
              <li key={link.id}>
                <a
                  className="inline-block"
                  href={link.linkUrl}
                >
                  {link.linkText}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

import { useState, useEffect } from "react"
import logo from "../assets/logo.svg"

function Navbar() {
  const [data, setData] = useState(null)

  async function fetchData() {
    const response = await fetch("data.json")
    const responseData = await response.json()
    setData(responseData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <nav className="navbar flex items-center justify-between p-5">
      <div className="navbar-logo">
        <img
          className="logo w-20"
          src={logo}
          alt="Fylo Logo"
          title="Fylo Logo"
        />
      </div>
      <div className="navbar-links font-raleway text-sm w-1/2">
        <ul className="flex justify-between">
          {data &&
            data.links.navbar.map((link, index) => (
              <li key={index}>
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

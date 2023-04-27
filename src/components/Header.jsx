import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function Header() {
  return (
    <header className="header">
      <div className="container mx-auto px-6">
        <Navbar data={data} />
        <Hero data={data} />
      </div>
    </header>
  )
}

export default Header

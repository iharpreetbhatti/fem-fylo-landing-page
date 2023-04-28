import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"

function Header({ content }) {
  return (
    <header className="header">
      <div className="container mx-auto px-6">
        <Navbar links={content.navigation} />
        <Hero
          title={content.hero.title}
          description={content.hero.description}
        />
      </div>
    </header>
  )
}

export default Header

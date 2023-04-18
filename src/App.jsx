import { useState, useEffect } from "react"
import fetchData from "./fetchData"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MainContent from "./components/MainContent"

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData("data.json", data => setData(data))
  }, [])

  return (
    <div className="App">
      <header className="header">
        <div className="container mx-auto px-6">
          <Navbar data={data} />
          <Hero data={data} />
        </div>
      </header>
      <main>
        <MainContent data={data} />
      </main>
      <footer></footer>
    </div>
  )
}

export default App

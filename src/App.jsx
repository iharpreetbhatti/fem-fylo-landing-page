import { useState, useEffect } from "react"
import fetchData from "./fetchData"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData("data.json", data => setData(data))
  }, [])

  return (
    <div className="App">
      <header className="bg-curve-mobile bg-no-repeat bg-bottom">
        <div className="container mx-auto px-6">
          <Navbar data={data} />
          <Hero data={data} />
        </div>
      </header>
    </div>
  )
}

export default App

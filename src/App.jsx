import { useState, useEffect } from "react"
import fetchData from "./fetchData"
import Navbar from "./components/Navbar"

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData("data.json", data => setData(data))
  }, [])

  return (
    <div className="App">
      <header>
        <Navbar data={data} />
      </header>
    </div>
  )
}

export default App

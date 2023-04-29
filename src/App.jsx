import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import data from "./data/data.json"

function App() {
  console.log(data)
  return (
    <div className="App">
      <Header content={data.header} />
      <MainContent content={data.mainContent} />
      {/* <Footer content={data.footer} /> */}
    </div>
  )
}

export default App

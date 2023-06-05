import { useState } from "react"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Main from "./pages/mainPage/Main"
import { Routes, Route } from 'react-router-dom'
import About from "./pages/aboutPage/About"
import Price from "./pages/pricePage/Price"
import Articles from "./pages/articlesPage/Articles"

function App() {
 

  return (
    <div className="App">
      <Header />
      


        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/price" element={<Articles />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/" element={<Main/>} />
        </Routes>

        

      <Footer/>
    </div>
  )
}

export default App

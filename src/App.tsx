/* eslint-disable @typescript-eslint/no-unused-vars */

import About from "./sections/About"
import BestSellers from "./sections/BestSellers"
import Contact from "./sections/Contact"
import Faq from "./sections/Faq"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import TopRated from "./sections/TopRated"
import { DarkModeProvider } from "./sections/DarkModeContext"

function App() {
  return (
    <div>
      <DarkModeProvider>

      <Header />
      <Hero />
      <About />
      <TopRated />
      <BestSellers />
      <Faq />
      <Contact />
      <Footer />
      </DarkModeProvider>

    </div>
  )
}

export default App

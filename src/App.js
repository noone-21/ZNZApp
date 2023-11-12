import './App.css'
import About from './components/About.js'
import Apparel from './components/Apparel.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import HowItWorks from './components/HowItWorks.js'
import Navbar from './components/Navbar.js'
import PatchCategories from './components/PatchCategories.js'
import Perks from './components/Perks.js'
import Poster from './components/Poster.js'
import PromotionalProducts from './components/PromotionalProducts.js'
import Reviews from './components/Reviews.js'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <PatchCategories />
      <Apparel/>
      <PromotionalProducts/>
      <HowItWorks/>
      <Reviews/>
      <Poster/>
      <Perks/>
      <Footer/>
    </>
  )
}

export default App

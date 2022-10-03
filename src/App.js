import CTA from './Components/CTA/CTA'
import Features from './Components/Features/Features'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Products from './Components/Products/Products'
import Video from './Components/Video/Video'

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Video />
        <Features />
        <Products />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App

import NavBar from "./components/NavBar"
import ScrollUp from "./components/ScrollUp"
import ShadowTop from "./components/ShadowTop"
import About from "./sections/About"
import FrontPage from "./sections/FrontPage"
import Skills from "./sections/Skills"


function App() {
  return (
    <div className="font-neue relative text-white select-none">
      <NavBar />
      <ShadowTop />
      <ScrollUp />
      <FrontPage />
      <About />
      <Skills />
    </div>
  )
}

export default App

import NavBar from "./components/NavBar"
import ScrollUp from "./components/ScrollUp"
import About from "./sections/About"
import Contact from "./sections/Contact"
import FrontPage from "./sections/FrontPage"
import Skills from "./sections/Skills"
import Works from "./sections/Works"


function App() {
  return (
    <div className="font-neue relative text-white select-none">
      <NavBar />
      <ScrollUp />
      <FrontPage />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  )
}

export default App

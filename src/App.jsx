import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import ScrollUp from "./components/ScrollUp"
import About from "./sections/About"
import Contact from "./sections/Contact"
import FrontPage from "./sections/FrontPage"
import Skills from "./sections/Skills"
import Works from "./sections/Works"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

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
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App

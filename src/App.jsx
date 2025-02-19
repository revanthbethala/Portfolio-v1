import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Particle from "./Components/Particle";
import Footer from "./Footer";
import TestimonialCards from "./Testimonals";
export default function App() {
  return (
    <div className="bg-slate-900 text-slate-50 bg-opacity-80 max-h-full max-w-full items-center flex flex-col justify-center overflow-x-hidden">
      <Particle />
      <Home />
      <About />
      <Projects />
      <TestimonialCards />
      <Contact />
      <Footer />

    </div>
  )
}
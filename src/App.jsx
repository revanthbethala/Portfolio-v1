import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Particle from "./Components/Particle";
import Footer from "./Footer";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import MySkills from "./Components/MySkills";
export default function App() {
  return (
    <div className="bg-slate-800 text-slate-50 max-h-full max-w-full items-center flex flex-col justify-center overflow-x-hidden">
      <Particle />
      <Home />
      <About />
      <Education />
      <Experience />
      <MySkills />
      <Projects />
      {/* <TestimonialCards /> */}
      <Contact />
      <Footer />
    </div>
  );
}

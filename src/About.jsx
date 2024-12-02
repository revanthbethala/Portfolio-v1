import Experience from "./Components/Experience"
import MySkills from "./Components/MySkills"
function About() {
   return (
      <div className="flex flex-col items-center justify-center gap-8 px-8 py-3 w-full" id="About">
         <h1 className="heading ">About Me</h1>
         <div className="lg:w-[75%]  space-y-8">
            <h2 className="md:text-lg text-stone-300 font-Inter text-justify ">
               I am a skilled Front-End Developer with expertise in HTML, CSS, JavaScript, React.js, and Tailwind CSS, focused on building responsive and efficient web applications. Currently pursuing a BTech degree (3rd year), I have gained practical experience through internships as a Python developer at Navodita Infotech and a web developer at InternIQ. I am driven by a passion for innovation and continuous learning in modern web technologies.
            </h2>
            <Experience />
            <MySkills />
         </div >

      </div >
   )
}

export default About
import { motion } from "motion/react"
import css from "../assets/icons/css.png"
import html from "../assets/icons/html.png"
import js from "../assets/icons/js.png"
import git from "../assets/icons/git.png"
import github from "../assets/icons/github.png"
import reactjs from "../assets/icons/reactjs.png"
import tailwindcss from "../assets/icons/tailwindcss.png"
import python from "../assets/icons/python.png"


const skills = ["HTML", "CSS", "JS", "REACT JS", "TAILWIND CSS", "GIT", "GITHUB", "PYTHON"]

const skillIcons = {
   HTML: html,
   CSS: css,
   JS: js,
   "REACT JS": reactjs,
   "TAILWIND CSS": tailwindcss,
   GIT: git,
   GITHUB: github,
   PYTHON: python,
};


const variants = {

   hidden: { opacity: 0, x: 30 },
   visible: { opacity: 1, x: 0 },
}


function MySkills() {

   return (

      <div className="flex items-center justify-center flex-col gap-y-10">
         <h2 className="heading">My Skills</h2>
         <ul
            className="grid grid-rows-2 md:grid-cols-4 grid-cols-2 gap-8">
            {skills.map((skill, index) =>
               <motion.li key={index}
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3, duration: 0.1, ease: "linear" }}
                  className="skill-style">
                  <img src={skillIcons[skill]} loading="lazy" alt={skill} className="w-12 h-12" />
                  <span className="font-semibold tracking-wide font-Parkinsans text-lg text-center">{skill}</span>
               </motion.li>
            )}
         </ul>
         <div>
         </div>
      </div >
   )
}

export default MySkills
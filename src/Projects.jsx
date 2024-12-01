import { motion } from "motion/react";
import weatherImg from "./assets/images/weather.png"
import smartPlayImg from "./assets/images/smartPlay.png"

const myProjects = [
   {
      title: "Smart Play",
      Description: [
         "Engaging platform for interactive online quizzes.",
         "Dynamic question sets with real-time scoring.",
         "User-friendly interface for seamless quiz participation.",
      ],
      Code: "https://github.com/revanthbethala/SmartPlay",
      Live: "https://smart-play.netlify.app",
      image: smartPlayImg,
   },
   {
      title: "Weather IO",
      Description: [
         "Provides real-time weather updates for any location.",
         "Intuitive and responsive design for easy navigation.",
         "Features detailed forecasts with user-friendly visuals.",
      ],
      Code: "https://github.com/revanthbethala/WEATHERIO",
      Live: "https://weathery-io.netlify.app",
      image: weatherImg,
   },

];

function Projects() {
   return (
      <div
         id="Projects"
         className="flex flex-col items-center justify-center px-5 sm:px-10 py-10"
      >
         <motion.h2
            className="heading mb-8 text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
         >
            Projects
         </motion.h2>
         <div className="grid gap-10 w-full max-w-screen-lg">
            {myProjects.map((project, i) => (
               <motion.div
                  key={i}
                  className="flex flex-col md:flex-row justify-between items-center rounded-xl bg-slate-500 border-2 border-slate-500 bg-opacity-20 shadow-lg p-5 md:p-8 lg:p-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  whileHover={{ scale: 1.02 }}
               >
                  <div className="flex flex-col gap-4 w-full md:w-1/2">
                     <h2
                        className="text-2xl lg:text-4xl font-bold text-white"
                     >
                        {project.title}
                     </h2>
                     <ul className="list-disc text-stone-300 text-sm tracking-wide font-Inter sm:text-base space-y-2 pl-5 font-semibold">
                        {project.Description.map((des, i) => (
                           <li key={i}>{des}</li>
                        ))}
                     </ul>
                     <div className="flex gap-5 mt-4 font-bold text-base font-Inter items-center">
                        <motion.a
                           href={project.Code}
                           target="_blank"
                           className="rounded-lg border-2 hover:bg-transparent bg-white px-4 py-2 text-teal-700 hover:text-white transition text-base"
                           whileHover={{ scale: 1.1 }}
                        >
                           View Code
                        </motion.a>
                        <motion.a
                           href={project.Live}
                           target="_blank"
                           className="rounded-lg font-semibold border-2 border-white px-4 py-2 text-white hover:bg-white hover:text-blue-600 transition"
                           whileHover={{ scale: 1.1 }}
                        >
                           Visit Site
                        </motion.a>
                     </div>
                  </div>
                  <motion.div
                     className="w-full md:w-1/2 flex justify-center mt-5 md:mt-0"
                     whileHover={{ scale: 1.05 }}
                  >
                     <img
                        className="max-w-full h-auto rounded-lg"
                        src={project.image}
                        alt={project.title}
                     />
                  </motion.div>
               </motion.div>
            ))}
         </div>
      </div>
   );
}

export default Projects;

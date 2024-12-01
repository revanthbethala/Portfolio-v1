import ContactButton from "./Components/ContactButton"
import Header from "./Components/Header"
import { motion } from "motion/react"

function Home() {
   return (
      <div className="w-full" id="Home">
         <Header />

         <main className="flex w-full flex-col items-center justify-around md:py-48 py-20">
            <motion.div className="flex min-w-60 flex-col items-center text-center lg:w-1/2 gap-6 text-white"
               initial={{ opacity: 0, translateY: 40 }}
               whileInView={{ opacity: 1, translateY: 0 }}
               transition={{ ease: "easeIn", duration: 0.6, delay: 0.6 }}
            >
               <h1
                  className="px-1 md:text-4xl text-3xl font-semibold text-center md:leading-relaxed leading-normal font-lora">Hello, I am Revanth <br />Passionate Front End Developer
               </h1>
               <p className="px-9 md:text-xl text-md text-gray-300 font-serif "> Focused on designing and developing web applications that are innovative and impactful. I aim to develop solutions that enhance user engagement</p>
               <div className="flex flex-row gap-4 items-center">
                  <motion.a
                     initial={{ scale: 1 }}
                     whileHover={{ scale: 1.1 }}
                     transition={{ ease: "linear", duration: 0.2 }}
                     href="/Revanth.pdf" download="Revanth-Resume"
                     className="bg-slate-200 border-2  hover:bg-transparent hover:text-white text-teal-600 px-3 py-2 rounded-lg font-Inter font-semibold text-base">Download Resume</motion.a>
                  <ContactButton buttonStyle={" bg-transparent hover:bg-slate-50 hover:text-purple-600 text-white "} >
                     Let&apos;s Connect
                  </ContactButton>
               </div>

            </motion.div>
         </main>

      </div >
   )
}

export default Home
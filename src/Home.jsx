import { ArrowDown, Download, Github, Instagram, Linkedin } from "lucide-react";
import Header from "./Components/Header";
import { motion } from "motion/react";

function Home() {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <div className="w-full h-screen px-3 md:pt-5 pt-20" id="home">
      <Header />

      <main className="flex w-full flex-col items-center justify-around md:pt-40 gap-10 pb-28 py-20">
        <motion.div
          className="flex min-w-60 flex-col items-center text-center lg:w-1/2 gap-6 text-white"
          initial={{ opacity: 0, translateY: 40 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ ease: "easeIn", duration: 0.6, delay: 0.6 }}
        >
          <h3 className="md:px-1 md:text-4xl text-2xl font-medium text-center md:leading-relaxed leading-normal font-lora">
            Hello, I am Revanth <br />
            Passionate Front End Developer
          </h3>
          <p className="md:px-9 md:text-lg text-base text-gray-200 font-lora tracking-wide">
            Focused on designing and developing web applications that are
            innovative and impactful. I aim to develop solutions that enhance
            user engagement.
          </p>
          <div className="flex flex-row gap-6 items-center mt-4">
            <a
              href="/Revanth.pdf"
              download="Revanth-Resume"
              className="flex items-center text-sm gap-2 bg-gray-100 font-semibold font-Inter border border-slate-600 text-blue-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-600
               hover:text-white px-5 py-2.5 rounded-full ease-in"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </motion.div>
        <motion.div variants={item} className="flex space-x-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://github.com/revanthbethala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-full border-2 p-2 bg-slate-900/50">
                <Github className="h-4 w-4" />
              </button>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://linkedin.com/in/revanthbethala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-full border-2 p-2 bg-slate-900/50">
                <Linkedin className="h-4 w-4" />
              </button>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://instagram.com/revanthbethala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-full border-2 p-2 bg-slate-900/50">
                <Instagram className="h-4 w-4" />
              </button>
            </a>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default Home;

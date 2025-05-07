import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import weatherio from "./assets/images/weather.png"
import shuriken from "./assets/images/shuriken.png"
import scraper from "./assets/images/scraper.png"

export default function Projects() {
  const projects = [
    {
      title: "Shuriken-AI Powered LMS Portal",
      description:
        "Shuriken is an AI-powered LMS that personalizes learning through adaptive content, intelligent assessments, and mock interviews. It tracks student progress and provides real-time performance analytics.",
      image: shuriken,
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "TensorFlow.js",
        "Express",
        "Gemini API",
      ],
      github: "https://github.com/revanthbethala/Shuriken-AI-Powered-LMS",
      demo: "https://demo.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "Developed a weather dashboard that displays real-time weather data, including temperature and humidity. Users can easily check the weather for any location. The interface is intuitive and responsive across devices.",
      image:weatherio,
      tags: [
        "React JS",
        "HTML",
        "TailwindCSS",
        "OpenWeatherAPI",
      ],
      github: "https://github.com/revanthbethala/weatherio",
      demo: "https://weathery-io.netlify.app",
    },
    {
      title: "Universal Web Scraper",
      description:
        "Developed a web scraper that extracts data from any webpage. Users can specify the elements they wish to scrape, and the tool presents the data in an organized format.",
      image: scraper,
      tags: [
        "Python",
        "Streamlit",
        "Playwright",
        "BeautifulSoup",
        "Gemini API",
      ],
      github: "https://github.com/revanthbethala/UniversalWebScraper",
      demo: "https://github.com/revanthbethala/UniversalWebScraper",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-24 md:py-32 md:px-16 ">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading">My Projects</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-300 md:text-lg">
            A showcase of my projects and applications that demonstrate my
            technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -15 }}
              className="h-full border border-slate-900 rounded-lg"
            >
              <div className="h-full flex flex-col overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-gray-800 rounded-lg">
                <div className="overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                </div>
                <div className="relative p-4">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="flex-grow p-4">
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.5 + tagIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className=" bg-blue-600 tracking-wide font-medium hover:bg-blue-500 text-gray-100 text-sm px-2 py-1 rounded-full transition-colors">
                          {tag}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center gap-2 py-2 px-4 border border-gray-600 text-gray-200 hover:bg-gray-700 rounded-full">
                        <Github className="h-4 w-4" />
                        Code
                      </button>
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* <button className="flex items-center gap-2 py-2 px-4 border border-gray-600 text-gray-200 hover:bg-gray-700 rounded-full">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </button> */}
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

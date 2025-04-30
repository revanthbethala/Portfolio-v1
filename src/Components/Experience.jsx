// import { motion } from "motion/react"

// export default function Experience() {
//    return (
//       <div>
//          <h1 className="heading py-7">Work Experience</h1>

//          <div className="grid md:grid-cols-2 gap-5 pt-5 ">

//             <motion.div
//                initial={{ opacity: 0, translateX: -60 }}
//                whileInView={{ opacity: 1, translateX: 0 }}
//                transition={{ ease: "easeOut", duration: 0.8, delay: 0.5 }}
//                className="sub-container  space-y-1">
//                <h2 className="text-lg font-semibold pb-1">Web Developer Intern</h2>
//                <h2 className="font-semibold md:text-base pb-3 justify-between flex ">Intern IQ <span>Feb 24-Mar 24</span> </h2>
//                <ul className="text-neutral-200 md:text-base text-sm list-disc px-4 space-y-2">
//                   <li>Designed and developed responsive and user friendly web applications independently.</li>
//                   <li>Utilized HTML, CSS, JavaScript to build and optimize web interfaces.</li>
//                   <li> Delivered quality solutions by managing all phases of the development process.</li>
//                </ul>

//             </motion.div>

//             <motion.div
//                initial={{ opacity: 0, translateX: 50 }}
//                whileInView={{ opacity: 1, translateX: 0 }}
//                transition={{ ease: "easeOut", duration: 0.7, delay: 0.3 }}
//                className="sub-container">
//                <h2 className="text-lg font-semibold pb-1">Python Developer Intern</h2>
//                <h2 className="font-semibold md:text-base pb-3 justify-between flex ">Navodita Infotech  <span>Feb 24-Mar 24</span> </h2>
//                <ul className="text-neutral-200 md:text-base text-sm list-disc px-4 space-y-2">
//                   <li>Conducted data analysis and web scraping to extract valuable information from online sources</li>
//                   <li>Utilized libraries such as Selenium and Pandas for data management and analysis</li>
//                   <li>Provided actionable insights and accurate results to enhance business decision-making</li>
//                </ul>
//             </motion.div>
//          </div>
//       </div>
//    )
// }

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experienceData = [
    {
      position: "Python Development Intern",
      company: "Infosys Springboard",
      location: "Remote",
      period: "Feb 2025 - Mar 2025",
      description:
        "Worked on developing a Python-based web scraping tool using BeautifulSoup, Playwright, and Streamlit. The tool allowed users to scrape the particular elements from a webpage and view the extracted data in a clean, interactive interface. I ensured the solution was user-friendly by providing options to download the results for further analysis.",
      skills: ["Python", "Streamlit", "Beautiful Soup", "Playwright"],
    },
    {
      position: "Web Development Intern",
      company: "Intern IQ",
      location: "Remote",
      period: "Feb 2023 - Mar 2023",
      description: `I independently developed responsive and user-friendly web applications, using HTML, CSS, and JavaScript to create and optimize interactive interfaces. I handled all stages of the development process, ensuring the delivery of high-quality and efficient solutions.`,

      skills: ["HTML", "CSS", "JS", "React JS"],
    },
    {
      position: "Python Programming Instructor",
      company: "NRI Institute of Technology",
      location: "Agiripalli, India",
      period: "Apr 2024 - Aug 2024",
      description:
        "I served as a Python tutor for 4 months, where I taught core programming concepts such as variables, control flow, functions, and object-oriented programming. I also guided students through hands-on projects, including simple games, to help reinforce their understanding through practical application.",
      skills: ["Python", "OOPS"],
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32  text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Professional Journey
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-400 md:text-lg">
            My work experience and internships that have helped me grow as a
            developer.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="overflow-hidden border-l-4 border-l-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg bg-slate-900/75">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 p-6 border-b border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-600 p-3 text-slate-200">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.position}
                      </h3>
                      <div className="text-lg font-medium text-gray-300 mt-1">
                        {item.company}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {item.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {item.location}
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-300">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.5 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className=" bg-blue-600 tracking-wide font-medium hover:bg-blue-600/40 text-gray-100 text-sm px-2 py-1 rounded-full transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

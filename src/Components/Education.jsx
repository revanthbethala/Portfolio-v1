import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology",
      location: "Mumbai, India",
      period: "2020 - 2024",
      description:
        "Specializing in Artificial Intelligence and Machine Learning with a minor in Data Science. Maintained a CGPA of 9.2/10.",
      achievements: [
        "Dean's List: All semesters",
        "Best Project Award",
        "Technical Lead, Coding Club",
      ],
      color: "from-blue-500 to-indigo-500",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      degree: "Higher Secondary Education",
      institution: "Delhi Public School",
      location: "Delhi, India",
      period: "2018 - 2020",
      description:
        "Completed with 95% in Science stream with Computer Science as an elective subject.",
      achievements: [
        "School Topper in Computer Science",
        "Science Olympiad Finalist",
        "Technical Club Secretary",
      ],
      color: "from-purple-500 to-pink-500",
      icon: <Award className="h-5 w-5" />,
    },
    {
      degree: "Secondary Education",
      institution: "Delhi Public School",
      location: "Delhi, India",
      period: "2016 - 2018",
      description:
        "Completed with 92% with distinction in Mathematics and Science.",
      achievements: [
        "Mathematics Olympiad Winner",
        "Best Student Award",
        "Science Exhibition Gold Medal",
      ],
      color: "from-green-500 to-emerald-500",
      icon: <Award className="h-5 w-5" />,
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading">
            Academic Journey
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            My educational background and qualifications that have shaped my
            technical expertise.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto ">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 rounded-full"></div>

          {/* Education items */}
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-20 "
            >
              {/* Timeline dot with pulse effect */}
              <div className="absolute top-[-20px] md:top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-500 p-3 flex items-center justify-center z-10">
                {item.icon}
                <span className="absolute w-10 h-10 bg-blue-400 rounded-full  animate-ping"></span>
              </div>

              {/* Year badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className={`hidden md:flex absolute top-0 left-1/2 transform mt-16 ${
                  index % 2 != 0 ? "left-[25.5rem]" : ""
                } bg-blue-400 text-white px-4 py-1 rounded-full text-sm font-medium z-10`}
              >
                {item.period}
              </motion.div>

              {/* Content card */}
              <div
                className={`mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 ${
                  index % 2 === 0 ? "md:grid-flow-dense" : ""
                } bg-slate-800 md:bg-transparent`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`${
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                  }`}
                >
                  <div className="overflow-hidden border-2 border-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`rounded-full p-2 bg-gradient-to-r ${item.color} text-white`}
                        >
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold">{item.degree}</h3>
                      </div>

                      <div className="mb-4">
                        <div className="text-lg font-medium">
                          {item.institution}
                        </div>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <MapPin className="mr-2 h-4 w-4" />
                          {item.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-medium">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.5 + i * 0.1,
                              }}
                              viewport={{ once: true }}
                              className="flex items-start"
                            >
                              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

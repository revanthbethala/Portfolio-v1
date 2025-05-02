import { motion } from "framer-motion";
import { Code, Activity, Sparkles } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="py-16">
      <div className="container px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading">About Me</h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-300 md:text-lg">
            Passionate Developer and Problem Solver
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left content - text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-gray-300 text-lg leading-relaxed font-Inter"
          >
            <p>
              I’m <span className="gradient-heading">Revanth</span>, a Computer
              Science student and full-stack developer focused on crafting
              clean, scalable web applications that solve real problems.
            </p>
            <p>
              My core expertise lies in developing modern web applications using
              <strong> React</strong>,<strong>Tailwind CSS</strong>, and
              <strong> Python </strong>,with a growing focus on data-driven
              interfaces and scalable architectures.
            </p>
            <p>
              I thrive in collaborative environments, love clean design, and
              constantly seek to level up through real-world challenges and
              creative problem solving.
            </p>
          </motion.div>

          {/* Right content - icons or highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:grid grid-cols-1 sm:grid-cols-2 gap-6 hidden "
          >
            {[
              {
                icon: <Code className="h-8 w-8 text-blue-500" />,
                title: "Frontend Dev",
                desc: "Responsive UIs with React & Tailwind",
              },
              {
                icon: <Activity className="h-8 w-8 text-green-400" />,
                title: "Data Curious",
                desc: "Exploring insights with Python & Pandas",
              },
              {
                icon: <Sparkles className="h-8 w-8 text-yellow-400" />,
                title: "Creative Builder",
                desc: "Loves clean design & interactive features",
              },
              {
                icon: <Code className="h-8 w-8 text-purple-400" />,
                title: "Always Learning",
                desc: "Building side-projects & experimenting",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-slate-900 p-5 rounded-xl shadow-lg  transition duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

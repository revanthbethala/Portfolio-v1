"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { SiReact, SiTailwindcss } from "react-icons/si";
import { useRef } from "react";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-[#E34F26]" />,
    level: 100,
    description: "Semantic markup, accessibility, SEO best practices",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-[#1572B6]" />,
    level: 85,
    description: "Responsive design, animations, CSS Grid & Flexbox",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-[#F7DF1E]" />,
    level: 80,
    description: "ES6+, async/await, DOM manipulation",
  },
  {
    name: "ReactJS",
    icon: <SiReact className="text-[#61DAFB]" />,
    level: 85,
    description: "Hooks, Context API, custom hooks, state management",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    level: 75,
    description: "Utility-first approach, responsive components, theming",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-[#F05032]" />,
    level: 80,
    description: "Branching, merging, rebasing, conflict resolution",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-100" />,
    level: 90,
    description: "Pull requests, issues, actions, project management",
  },
  {
    name: "Python",
    icon: <FaPython className="text-blue-500" />,
    level: 70,
    description: "Data analysis, automation, scripting, APIs",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function SkillsShowcase() {
  const constraintsRef = useRef(null);

  return (
    <section id="skills" className="md:py-24 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heading"
          >
            Technical Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto"
          >
            My professional skillset and proficiency levels across various
            domains of software development.
          </motion.p>
        </div>

        <motion.div
          ref={constraintsRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
              }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-slate-700/50 text-2xl mr-4">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                  {/* <p className="text-xs text-slate-400 mt-1">{skill.description}</p> */}
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-slate-400">
                    Proficiency
                  </span>
                  <span className="text-xs font-medium text-slate-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 1,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

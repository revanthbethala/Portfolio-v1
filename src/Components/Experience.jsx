import { motion } from "motion/react"

export default function Experience() {
   return (
      <div>
         <h1 className="heading py-7">Work Experience</h1>

         <div className="grid md:grid-cols-2 gap-5 pt-5 ">

            <motion.div
               initial={{ opacity: 0, translateX: -60 }}
               whileInView={{ opacity: 1, translateX: 0 }}
               transition={{ ease: "easeOut", duration: 0.8, delay: 0.5 }}
               className="sub-container  space-y-1">
               <h2 className="text-lg font-semibold pb-1">Web Developer Intern</h2>
               <h2 className="font-semibold md:text-base pb-3 justify-between flex ">Intern IQ <span>Feb 24-Mar 24</span> </h2>
               <ul className="text-neutral-200 md:text-base text-sm list-disc px-4 space-y-2">
                  <li>Designed and developed responsive and user friendly web applications independently.</li>
                  <li>Utilized HTML, CSS, JavaScript to build and optimize web interfaces.</li>
                  <li> Delivered quality solutions by managing all phases of the development process.</li>
               </ul>

            </motion.div>

            <motion.div
               initial={{ opacity: 0, translateX: 50 }}
               whileInView={{ opacity: 1, translateX: 0 }}
               transition={{ ease: "easeOut", duration: 0.7, delay: 0.3 }}
               className="sub-container">
               <h2 className="text-lg font-semibold pb-1">Python Developer Intern</h2>
               <h2 className="font-semibold md:text-base pb-3 justify-between flex ">Navodita Infotech  <span>Feb 24-Mar 24</span> </h2>
               <ul className="text-neutral-200 md:text-base text-sm list-disc px-4 space-y-2">
                  <li>Conducted data analysis and web scraping to extract valuable information from online sources</li>
                  <li>Utilized libraries such as Selenium and Pandas for data management and analysis</li>
                  <li>Provided actionable insights and accurate results to enhance business decision-making</li>
               </ul>
            </motion.div>
         </div>
      </div>
   )
}
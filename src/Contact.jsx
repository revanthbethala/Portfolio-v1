import ContactButton from "./Components/ContactButton";
import { motion } from "motion/react"
export default function Contact() {
   return (
      <div className="flex flex-col items-center justify-center gap-8 px-8 pt-3 pb-9 " id="Contact">
         <h2 className="heading">Contact Me</h2>
         <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
            whileInView={{ opacity: 1, clipPath: "circle(200% at 50% 50%)" }}
            transition={{
               duration: 2.2,
               ease: "easeOut",
               delay: 1
            }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-justify space-y-4 p-4 rounded-lg items-center flex flex-col justify-center bg-gradient-to-l from-slate-600 to-slate-700 shadow-2xl border-2 border-teal-600">
            <p className="font-medium text-lg text-neutral-200 text-center">
               I&apos;m always open to new collaboration opportunities and connecting with like-minded professionals. If you have a project in mind, need assistance, or simply want to exchange ideas, feel free to reach out.
               Let&apos;s work together and create something impactful and innovative.
            </p>
            <ContactButton buttonStyle={"bg-slate-100 text-sky-700 border-none text-lg"}>Contact Me</ContactButton>
         </motion.div>
      </div>
   );
}

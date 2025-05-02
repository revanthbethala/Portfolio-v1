import ContactButton from "./Components/ContactButton";
import { motion } from "motion/react";
export default function Contact() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-5 px-8 py-20 "
      id="contact"
    >
      <h2 className="heading">Contact Me</h2>
      <p className="mx-auto max-w-[560px] text-gray-300 md:text-lg text-center">
        Have a project in mind or want to discuss potential opportunities? Feel
        free to reach out!
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "easeIn",
          delay: 1,
        }}
        viewport={{ once: true }}
        className="lg:w-1/2 bg-slate-700 text-justify space-y-4 p-4 rounded-lg items-center flex flex-col justify-center "
      >
        <p className="md:text-lg text-gray-300 text-center text-base font-Inter">
          I&apos;m always open to new collaboration opportunities and connecting
          with like-minded professionals. If you have a project in mind, need
          assistance, or simply want to exchange ideas, feel free to reach out.
          Let&apos;s work together and create something impactful and
          innovative.
        </p>
        <ContactButton
          buttonStyle={
            "bg-slate-100 text-blue-600 border-none text-lg rounded-xl"
          }
        >
          Contact Me
        </ContactButton>
      </motion.div>
    </div>
  );
}

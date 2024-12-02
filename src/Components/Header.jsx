import { motion } from "motion/react"


function Header() {
   return (
      <motion.nav className="p-5 flex items-center justify-center text-slate-100"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ ease: "easeIn", duration: 1, delay: 0.9 }}
      >
         <ul className="flex justify-center items-center bg-gradient-to-tl from-slate-900 via-slate-700 to-slate-600 gap-4 font-semibold rounded-lg fixed top-3 z-50">
            <li className="li-style"><a className="cursor-pointer " href="#Home">Home</a></li>
            <li className="li-style"><a className="cursor-pointer" href="#About">About</a></li>
            <li className="li-style"><a className="cursor-pointer" href="#Projects">Projects</a></li>
            <li className="li-style"><a className="cursor-pointer" href="#Contact">Contact</a></li>
         </ul>
      </motion.nav>
   )
}

export default Header;
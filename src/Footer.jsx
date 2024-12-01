import githubImg from "./assets/icons/github.png"
import instagramImg from "./assets/icons/instagram.png"
import linkedinImg from "./assets/icons/linkedin.png"
import facebookImg from "./assets/icons/facebook.png"

function Footer() {
   return (
      <footer className="w-full px-10 bg-slate-700 py-5 flex flex-col">
         <div className="grid lg:grid-cols-2 gap-5">
            <div className="space-y-3  font-medium ">
               <h2 className=" font-Parkinsans text-xl pb-4 font-semibold text-slate-200">Contact Information</h2>
               <p className=" tracking-wide text-gray-300 px-3">✉️ Email: bethalarevanth@gmail.com</p>
               <p className=" tracking-wide text-slate-300 px-3">📌 Location: Vuyyuru,India</p>
            </div>
            <div className="space-y-6">
               <h2 className="font-semibold font-Parkinsans text-xl ">Follow Me At</h2>
               <ul className="gap-6 font-Inter font-medium tracking-wide text-sm text-gray-300 grid grid-cols-2 items-center">
                  <li className="w-8 h-8 hover:underline underline-offset-2">
                     <a href="https://github.com/revanthbethala" target="_blank" className="flex gap-4 flex-row items-center">
                        <img src={githubImg} alt="github" />
                        GitHub
                     </a>
                  </li>
                  <li className="w-8 h-8 hover:underline underline-offset-2 ">
                     <a href="https://linkedin.com/in/revanthbethala" target="_blank" className="flex gap-4 flex-row items-center">
                        <img src={linkedinImg} alt="linked in" />
                        LinkedIn
                     </a>
                  </li>
                  <li className="w-8 h-8 hover:underline underline-offset-2 ">
                     <a href="https://instagram.com/revanthbethala" target="_blank" className="flex gap-4 flex-row items-center">
                        <img src={instagramImg} alt="instagram" />
                        Instagram
                     </a>
                  </li>
                  <li className="w-8 h-8 hover:underline underline-offset-2 ">
                     <a href="https://facebook.com/revanthbethala" target="_blank" className="flex gap-4 flex-row items-center">
                        <img src={facebookImg} alt="facebook" />
                        Facebook
                     </a>
                  </li>
               </ul>
            </div>
         </div >
         <h3 className="w-full text-center pt-8 font-semibold font-Inter text-stone-200 text-base">
            &copy; 2024 Revanth. All rights reserved.
         </h3>
      </footer>
   )
}

export default Footer
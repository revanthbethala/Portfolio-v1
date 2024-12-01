/* eslint-disable react/prop-types */

function ContactButton({ buttonStyle, children }) {

   function handleClick() {
      window.location.href = "mailto:bethalarevanth@gmail.com?subject=Contact Request";
   }
   return (
      <button
         onClick={handleClick}
         className={`${buttonStyle} px-3 py-2 rounded-lg font-Inter font-semibold text-base hover:scale-110 transition-all ease-in duration-150 delay-150 border-2`}
      >
         {children}
      </button>
   )
}

export default ContactButton
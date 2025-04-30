import React from "react";

const testimonials = [
   {
      name: "Ch. Murali Krishna",
      position: "HOD, NRI Institute of Technology",
      text: "He consistently demonstrates a strong grasp of web and mobile development. His dedication to learning and applying new technologies is impressive.",
   },
   {
      name: "Dr. G. Adi Lakshmi",
      position: "Professor, NRI Institute of Technology",
      text: "He has a unique ability to simplify complex concepts. His Python tutoring sessions have greatly benefited his peers.",
   },
   {
      name: "Karri Sripathi Rao",
      position: "Classmate",
      text: "Working with He on our group projects was a game changer. His coding skills and creativity brought our ideas to life.",
   },
   {
      name: "Lohit Sai",
      position: "Fellow Developer",
      text: "He is a talented developer. His work on our mobile app showcased his skill in delivering user-friendly designs.",
   },
   {
      name: "Ayyala Hari",
      position: "Project Partner",
      text: "His support and knowledge made our project successful. He is always willing to help and share his expertise.",
   },
   {
      name: "Amrutha",
      position: "Professor, NRI Institute of Technology",
      text: "His enthusiasm for coding is infectious. His projects showcase his ability to blend creativity with technical skills.",
   },
];

const TestimonialCards = () => {
   return (
      <div className="max-w-6xl mx-auto px-4 py-12 ">
         <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {testimonials.map((testimonial, index) => (
               <div
                  key={index}
                  className="bg-slate-500 bg-opacity-20  p-6 rounded-2xl text-white border border-gray-200"
               >
                  <p className="text-gray-100 mb-4">"{testimonial.text}"</p>
                  <h3 className="text-lg font-semibold text-gray-300">{testimonial.name}</h3>
                  <p className="text-sm text-gray-300">{testimonial.position}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default TestimonialCards;

function About() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-8 px-8 py-3 w-full"
      id="about"
    >
      <h1 className="heading ">About Me</h1>
      <div className="lg:w-[75%]  space-y-8">
         <img src="" alt="" />
        <h2 className="md:text-lg text-stone-300 font-Inter text-justify ">
          {/* I am a skilled Front-End Developer with expertise in HTML, CSS, JavaScript, React.js, and Tailwind CSS, focused on building responsive and efficient web applications. Currently pursuing a BTech degree (3rd year), I have gained practical experience through internships as a Python developer at Navodita Infotech and a web developer at InternIQ. I am driven by a passion for innovation and continuous learning in modern web technologies. */}
          I'm a final year BTech Computer Science student with a passion for
          building innovative solutions. I specialize in full-stack development,
          with expertise in React, Node.js, and cloud technologies. My journey
          in tech began with a curiosity about how things work, which evolved
          into a deep interest in software development. I enjoy tackling complex
          problems and turning ideas into reality through code.
        </h2>
      </div>
    </div>
  );
}

export default About;

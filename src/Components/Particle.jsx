import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
   const [init, setInit] = useState(false);

   useEffect(() => {
      initParticlesEngine(async (engine) => {
         await loadFull(engine);
      }).then(() => {
         setInit(true);
      });
   }, []);

   const particlesLoaded = (container) => { };

   return (
      <>
         {init && (
            <Particles
               id="tsparticles"
               particlesLoaded={particlesLoaded}
               style={{
                  zIndex: -1,
               }}
               options={{
                  fpsLimit: 200,
                  interactivity: {
                     events: {
                        onClick: {
                           enable: false,
                           mode: "push",
                        },
                        onHover: {
                           enable: true,
                           mode: "repulse",
                        },
                        resize: true,
                     },
                     modes: {
                        push: {
                           quantity: 2,
                        },
                        repulse: {
                           distance: 160,
                           duration: 0.5,
                        },
                     },
                  },
                  particles: {
                     color: {
                        value: "#c8d4df",
                     },
                     links: {
                        distance: 150,
                        enable: false,
                        opacity: 0.6,
                        width: 1,
                     },
                     move: {
                        direction: "bottom",
                        enable: true,
                        outModes: {
                           default: "out",
                        },
                        random: false,
                        speed: 0.8,
                        straight: false,
                     },
                     number: {
                        density: {
                           enable: true,
                           area: 800,
                        },
                        value: 130,
                     },
                     opacity: {
                        value: { min: 0.2, max: 0.88 },
                        animation: {
                           enable: true,
                           speed: 0.5,
                           minimumValue: 0.3,
                           sync: true,
                        },
                     },
                     shape: {
                        type: "star",
                     },
                     size: {
                        value: { min: 1, max: 3 },
                     },
                  },
                  detectRetina: true,
               }}
            />
         )}
      </>
   );
}

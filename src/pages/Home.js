import TypeWriterEffect from 'react-typewriter-effect'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Home = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
  return (
    <div id="home" className="bg-slate-900 h-screen flex flex-col justify-center justify-items-center content-center items-center text-white">
      <h1 className="font-medium text-5xl font-sans ">
        LALO LEONEL MAMANI
      </h1>
      <TypeWriterEffect
        textStyle={{ fontSize: 40}}// position: "absolute", backgroundColor: "red" 
        startDelay={100}
        cursorColor="white"
        text="Desarrollador Frontend"
        typeSpeed={100}
        eraseSpeed={100}
        />

        <Particles 
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{ 
            fullScreen: {enable: false},
            fpsLimit: 50,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
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
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
    </div>
  );
};

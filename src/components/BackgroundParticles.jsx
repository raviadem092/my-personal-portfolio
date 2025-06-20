// BackgroundParticles.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "out",
            },
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundParticles;

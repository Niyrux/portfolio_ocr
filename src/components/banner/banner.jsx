import React from "react";
import "./banner.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Formation from "../formation/formation";

function Banner() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <div className="container-banner" id="propos">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen:{enable:false},
          fpsLimit: 30,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 1,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          detectRetina: true
        }}
      />
      <div>
        <h1>Présentation</h1>
        <p>
          Bonjour ! Je m'appelle Samuel Levy, j'ai 24 ans et je suis passionné
          par le monde de la technologie et du web. Il y a un an et demi, j'ai
          plongé dans le domaine de l'intégration web, où je combine ma
          créativité avec mes compétences techniques pour donner vie à des sites
          web élégants et fonctionnels.
        </p>
        <Formation/>
      </div>
    </div>
  );
}

export default Banner;

import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import { Link } from "react-router-dom";

function Herosection(props) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: "#02111B",
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 3,
        random: true,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* <Particles
        id="tsparticles"
        options={options}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      /> */}

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="intro">
          <img src="images/photo.png" alt="image" className="mb-4" />

          <h1 className="mb-2 mt-0">Hajar Zemzem</h1>
          <p>
            {" Senior Software Engineer"}
            <label value></label>
          </p>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;

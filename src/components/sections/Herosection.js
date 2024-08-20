import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

function Herosection(props) {
  const { x, y } = props.position;
  const { height, width } = props.elementDimensions;
  const activeParallax = (depth = 15) => {
    let posX = (width / 2 - x) / depth;
    let posY = (height / 2 - y) / depth;
    return {
      transform: `translate(${posX}px, ${posY}px)`,
    };
  };

  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
    >
      <div className="container">
        <div className="intro">
          <img src="images/photo.png" alt="image" className="mb-4" />

          <h1 className="mb-2 mt-0">Hajar Zemzem</h1>
          <p>
            {" Software Engineer"}
            {/* <Typed
              strings={[
                "Software Engineer",
              ]}
              typeSpeed={80}
              backSpeed={40}
              attr="value"
              loop
            > */}
              <label value></label>
            {/* </Typed> */}
          </p>

          {/* <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
          </ul> */}

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Hire me
            </Link>
          </div>
        </div>

        <div className="scroll-down">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Herosection;

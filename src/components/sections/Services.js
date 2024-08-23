import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/ux-design.svg",
    title: "Product Design",
    content:
      "Prioritizing user experience and making sure every corner of your web app is perfect and reflects the essence of your business.",
    color: "#02111B",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/coding.svg",
    title: "Web Development",
    content:
      "Using the latest technologies to ensure website performance and scalability to keep your business moving.",
    color: "#02111B",
    contentColor: "light",
  },
  {
    id: 3,
    icon: "images/ecommerce.svg",
    title: "E-Commerce Development",
    content:
      "Partnering with BigCommerce and Shopify to provide your business with everything it needs to grow and meet your goals.",
    color: "#02111B",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;

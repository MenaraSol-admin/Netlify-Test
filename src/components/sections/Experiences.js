import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";
import EducationTimeline from "../elements/EducationTimeline";

const educationData = [
  {
    id: 1,
    title: "M.S. Computer Science",
    university: "Georgia Institute of Technology",
    years: "Machine Learning Specialization",
    content:
      ["Machine Learning | Reinforcement Learning | Computer Vision | Natural Language Processing | Robotics | AI Ethics" ],
  },
  {
    id: 2,
    title: "B.S. Computer Science",
    university: "Kennesaw State  University",
    years: "Artificial Intelligence Concentration",
    content:
      ["Intro to AI | ML | Intro to SWE | Algorithm Analysis | Parallel & Distributed Computing | Intro to Database Systems"],
  },
  {
    id: 3,
    title: "Full Stack Web Development Certificate",
    university: "Georgia Institure of Technology",
    years: "Coding Bootcamp",
    content:
      ["HTML5 | CSS3 | Bootstrap | JQuery | JSON | AJAX | JavaScript | MySQL | MERN Stack | .NET | C# | Comp Sci Fundamentals."],
  },
];

const experienceData = [
  {
    id: 1,
    title: "Senior Software Engineer - MagMutual",
    years: "February 2023 - July 2024",
    content:
      ["- Collaborated within a high-performing team to design, develop, and enhance various applications that address both customer-facing needs and internal operational requirements, utilizing technologies like ReactJS, Python FastAPI, and more.", 
        "- Actively contributed to the agile development process, applying Object-Oriented Analysis and Design (OOA/OOD) principles to ensure the delivery of robust, high-quality code for key projects, driving company growth and operational success.", 
        "- Embraced continuous learning and a proactive approach to optimize application performance, while mentoring team members and fostering a culture of innovation, technical excellence, and collaborative growth."]
  },
  {
    id: 2,
    title: "Software Engineer - The Home depot",
    years: "Aug 2021 - January 2023",
    content:
      ["- Programmed and customized services within vendor onboarding applications to streamline workflows and improve operational efficiency.", 
        "- Translated business requirements into comprehensive technical designs, overseeing each phase from conception to implementation to ensure solutions met production standards.", 
        "- Conducted thorough testing and code reviews for assigned projects, presenting findings and recommending solutions to management to enhance system performance and reliability."],
  },
  {
    id: 3,
    title: "Developer II - Cox Enterprises - Atlanta Journal Constitution",
    years: "Nov 2020 - July 2021",
    content:
      ["- Updated and maintained the AJC website, along with other Cox Media newspaper sites, leveraging ReactJS for enhanced performance and user experience.", 
        "- Developed new features and story page layouts using React, improving the site's interactivity and content presentation.",
        "- Integrated APIs to create dynamic widgets, such as the Golf Leaderboard widget (see Works section), enriching user engagement on the AJC website.", 
        "- Collaborated closely with designers to implement a comprehensive site redesign and rebranding, ensuring visual consistency and a modernized look across the newspaper platform."]
  },
  {
    id: 4,
    title: "Lead Web Developer - EYStudios",
    years: "Nov 2019 – Nov 2020",
    content:
      ["- Oversaw task estimation and timeline management to ensure timely and efficient project delivery.", 
        "- Established a streamlined Git flow process and implemented robust code review standards to improve code quality and foster team collaboration.", 
        "- Directed both the in-house development team and an overseas team in India, coordinating workflows and aligning project milestones across time zones.",
        "- Developed and maintained project documentation to track progress and ensure smooth handoffs, addressing technical challenges and providing mentorship to team members.",
        "- Worked closely with product stakeholders to align technical strategies with business goals, adapting development approaches to meet changing project requirements."],
  },
  {
    id: 5,
    title: "Web Developer - EYStudios",
    years: "Aug 2018 – Oct 2019",
    content:
      ["- Maintained, enhanced, and built front-end functionality to adapt to evolving customer needs and improve user experience.", 
        "- Developed high-spec front-end features using cross-browser compatible HTML, CSS, and JavaScript frameworks, including jQuery, ReactJS, VueJS, and NodeJS.", 
        "- Implemented e-commerce and CMS-based websites on platforms like BigCommerce, Shopify, and WordPress, ensuring seamless integrations and optimal performance.", 
        "- Collaborated closely with account managers, developers, and designers to coordinate project timelines and align technical execution with client expectations, achieving successful and timely project deliveries."],
  },
  {
    id: 6,
    title: "Software Engineer Intern - iVoyant",
    years: "May 2018 – July 2018",
    content:
      ["Used React and NPM packages to generate charts and dashboards based on data entered by clients.", 
        "- Created custom software that companies use to track progress of tasks, projects, etc.", 
        "- Used MERN stack to get data and translate it into visuals using ChartJS."],
  },
  {
    id: 7,
    title: "Full Stack Web Development TA - Georgia Institute of Technology",
    years: "Feb 2018 – Apr 2019",
    content:
      ["- Supported lead instructors at Georgia Tech’s coding bootcamp, assisting with classroom activities, projects, and code exercises.",
        "- Provided hands-on guidance to students during coding activities, offering one-on-one support and answering technical questions.",
        "- Conducted research to address complex student queries, ensuring comprehensive understanding even beyond classroom coverage.",
        "- Graded all homework assignments, providing feedback to enhance students' learning experience and foster their development in full- stack web technologies."
      ],
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-12">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;

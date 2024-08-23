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
      ["- Collaborate within a high-functioning team to develop and enhance diverse applications addressing the company's needs, including customer-facing apps and internal operational tools, leveraging ReactJS, Python FastApi, and other relevant technologies.", "- Play a key role in the agile development process, applying OOA/OOD principles and ensuring the delivery of quality code for critical projects, contributing to the company's growth and success.", "- Continuously seek learning opportunities and embrace a proactive approach to optimize application performance, while mentoring and supporting other developers, fostering a culture of innovation and excellence."]
  },
  {
    id: 2,
    title: "Software Engineer - The Home depot",
    years: "Aug 2021 - January 2023",
    content:
      ["- Responsible for programming and customizing services within the vendor onboarding applications.", "- Take business requirements and develop the total technical design for assigned projects and ensure proper usage as part of the design efforts in building a system to be put into production.", "- Conduct appropriate test reviews on assigned projects as necessary and present findings and offer solutions to management."],
  },
  {
    id: 3,
    title: "Developer II - Cox Enterprises",
    years: "Nov 2020 - July 2021",
    content:
      ["- Update and maintain the AJC website, as well as other newspaper websites part of Cox Media using ReactJS.", "- Use React to build new features and story page layouts.- Use APIs to build widgets to enhance the AJC website such as the Golf Leaderboard widget: https://www.ajc.com/sports/golf/leaderboard/", "- Work with designers to implement the new redesign and rebranding of the newspaper site."]
  },
  {
    id: 4,
    title: "Lead Web Developer - EYStudios",
    years: "Nov 2019 – Nov 2020",
    content:
      ["- Along the previous duties, manage the in-house dev team and the overseas team in India.", "- Estimate tasks and manage timelines for projects.", "- Establish a Git flow and implement code review rules between team members."],
  },
  {
    id: 5,
    title: "Web Developer - EYStudios",
    years: "Aug 2018 – Oct 2019",
    content:
      ["- Maintain, enhance, and develop front-end functionality to meet changing customer needs.", "- Develop front-end features using cross-browser compliant HTML, CSS, and JavaScript (JQuery, ReactJS, VueJS, NodeJS) to the highest specifications.", "- Implement ecommerce and CMS based sites using platforms such as Bigcommerce, Shopify, and Wordpress. - Collaborate with account managers, developers and designers to ensure the successful and timely delivery of projects."],
  },
  {
    id: 6,
    title: "Software Engineer Intern - iVoyant",
    years: "May 2018 – July 2018",
    content:
      ["Use React and NPM packages to generate charts and dashboards based on data entered by clients. Create custom software that companies use to track progress of tasks, projects, etc. Use MERN stack to get data and translate it into visuals."],
  },
  {
    id: 7,
    title: "Full Stack Web Development TA - Georgia Institute of Technology",
    years: "Feb 2018 – Apr 2019",
    content:
      ["Assist instructor at the coding bootcamp at GA Tech. Walk around class during code activities and projects to assist students. Research and answer student questions when the instructor is unable to. Grade all homework assignments. HTML5 | CSS3 | Bootstrap | JQuery | JSON | AJAX | JavaScript | MySQL | MERN Stack | .NET | C# | Comp Sci Fundamentals"],
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

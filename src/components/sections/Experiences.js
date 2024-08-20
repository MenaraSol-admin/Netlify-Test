import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "B.S. Computer Science",
    university: "Kennesaw State  University",
    years: "2017",
    content:
      ["Intro to AI | ML | Intro to SWE | Algorithm Analysis | Parallel & Distributed Computing | Intro to Database Systems"],
  },
  {
    id: 2,
    title: "Full Stack Web Development Certificate",
    university: "Georgia Institure of Technology",
    years: "2017",
    content:
      ["HTML5 | CSS3 | Bootstrap | JQuery | JSON | AJAX | JavaScript | MySQL | MERN Stack | .NET | C# | Comp Sci Fundamentals."],
  },
  {
    id: 3,
    title: "A.S. Computer Science",
    university: "Al Akhawayn University",
    years: "2014",
    content:
      ["Discrete Mathematics | C | C++ | Java | Data Structures | Operating Systems."],
  },
];

const experienceData = [
  {
    id: 1,
    title: "Software Engineer - The Home depot",
    years: "Aug 2021 - Present",
    content:
      ["- Responsible for programming and customizing services within the vendor onboarding applications.", "- Take business requirements and develop the total technical design for assigned projects and ensure proper usage as part of the design efforts in building a system to be put into production.", "- Conduct appropriate test reviews on assigned projects as necessary and present findings and offer solutions to management."],
  },
  {
    id: 2,
    title: "Developer II - Cox Enterprises",
    years: "Nov 2020 - July 2021",
    content:
      ["- Update and maintain the AJC website, as well as other newspaper websites part of Cox Media using ReactJS.", "- Use React to build new features and story page layouts.- Use APIs to build widgets to enhance the AJC website such as the Golf Leaderboard widget: https://www.ajc.com/sports/golf/leaderboard/", "- Work with designers to implement the new redesign and rebranding of the newspaper site."]
  },
  {
    id: 3,
    title: "Lead Web Developer - EYStudios",
    years: "Nov 2019 – Nov 2020",
    content:
      ["- Along the previous duties, manage the in-house dev team and the overseas team in India.", "- Estimate tasks and manage timelines for projects.", "- Establish a Git flow and implement code review rules between team members."],
  },
  {
    id: 3,
    title: "Web Developer - EYStudios",
    years: "Aug 2018 – Oct 2019",
    content:
      ["- Maintain, enhance, and develop front-end functionality to meet changing customer needs.", "- Develop front-end features using cross-browser compliant HTML, CSS, and JavaScript (JQuery, ReactJS, VueJS, NodeJS) to the highest specifications.", "- Implement ecommerce and CMS based sites using platforms such as Bigcommerce, Shopify, and Wordpress. - Collaborate with account managers, developers and designers to ensure the successful and timely delivery of projects."],
  },
  {
    id: 3,
    title: "Software Engineer Intern - iVoyant",
    years: "May 2018 – July 2018",
    content:
      ["Use React and NPM packages to generate charts and dashboards based on data entered by clients. Create custom software that companies use to track progress of tasks, projects, etc. Use MERN stack to get data and translate it into visuals."],
  },
  {
    id: 3,
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
          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
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

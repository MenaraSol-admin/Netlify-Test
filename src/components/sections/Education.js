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

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Education" />
        <div className="row">
          <div className="col-md-12">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <EducationTimeline key={education.id} education={education} />
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

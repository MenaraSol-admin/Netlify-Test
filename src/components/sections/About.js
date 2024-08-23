import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Hajar Zemzem",
  avatarImage: "/images/photo.png",
  content:
    "With over six years of experience in software engineering, I specialize in crafting high-performance, scalable applications that meet both customer-facing and internal operational needs. My journey spans across diverse industries, including insurance, retail, and media, where I've honed my skills in technologies like ReactJS, Python, and Java. I've led projects from conceptualization to deployment, focusing on delivering robust solutions while fostering a collaborative and innovative environment. With a strong foundation in machine learning and artificial intelligence, I'm passionate about leveraging technology to solve complex problems and drive business success. Whether working independently or within a team, I am dedicated to continuous learning and the pursuit of excellence in every project I undertake.",
};

const progressData1 = [
  {
    id: 1,
    title: "ReactJS",
    percantage: 95,
    progressColor: "#426B69",
  },
  {
    id: 2,
    title: "TypeScript",
    percantage: 85,
    progressColor: "#426B69",
  },
  {
    id: 3,
    title: "Java",
    percantage: 80,
    progressColor: "#426B69",
  },
  {
    id: 4,
    title: "Problem-Solving & Critical Thinking",
    percantage: 90,
    progressColor: "#426B69",
  }
];

const progressData2 = [
  {
    id: 1,
    title: "Python",
    percantage: 85,
    progressColor: "#426B69",
  },
  {
    id: 2,
    title: "Agile Development (OOA/OOD Principles)",
    percantage: 75,
    progressColor: "#426B69",
  },
  {
    id: 3,
    title: "Team Leadership & Mentorship",
    percantage: 80,
    progressColor: "#426B69",
  },
  {
    id: 4,
    title: "Restful APIs",
    percantage: 95,
    progressColor: "#426B69",
  }
];

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 21,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cups of coffee",
    count: 1508,
    icon: "icon-cup",
  },
  // {
  //   id: 3,
  //   title: "Satisfied clients",
  //   count: 11,
  //   icon: "icon-people",
  // },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-12">
                  <p>{aboutContent.content}</p>
                  {/* <div className="mt-3">
                    <a href="!#" className="btn btn-default">
                      Download CV
                    </a>
                  </div> */}
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData1.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
                <div className="col-md-6">
                  {progressData2.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

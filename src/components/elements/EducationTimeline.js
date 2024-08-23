import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function EducationTimeline({ education }) {
  const { id, years, title, content } = education;
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="timeline-container">
        <div className="content">
          <h3 className="title education-title">{title} </h3>
          <span className="time education-time">{years} {id === 1 ? <span className="time education-time"> - Expected 2026</span> : null } </span>
          <p className="education-content">{content[0]}</p>
          {content[1] ? <p>{content[1]}</p> : null }
          {content[2] ? <p>{content[2]}</p> : null }
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default EducationTimeline;

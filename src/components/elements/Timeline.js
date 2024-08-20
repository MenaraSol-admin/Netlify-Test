import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Timeline({ education }) {
  const { years, title, content } = education;
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="timeline-container">
        <div className="content">
          <span className="time">{years}</span>
          <h3 className="title">{title}</h3>
          <p>{content[0]}</p>
          {content[1] ? <p>{content[1]}</p> : null }
          {content[2] ? <p>{content[2]}</p> : null }
        </div>
      </div>
      <br></br>
    </ScrollAnimation>
  );
}

export default Timeline;

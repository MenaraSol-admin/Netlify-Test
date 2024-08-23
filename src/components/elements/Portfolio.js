import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Portfolio({ portfolio }) {
  const { category, title, image, popupLink, link } = portfolio;
  const [toggler, setToggler] = useState(false);

  const handleLightbox = (e) => {
    e.preventDefault();
    setToggler(!toggler);
  };

  const renderLinkIcon = () => {
    if (link) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="icon-link-wrapper">
          <i className="icon-link"></i>
        </a>
      );
    }
    return null;
  };

  const renderPopupIcon = () => {
    if (popupLink) {
      let icon;
      if (popupLink.toString().match(/youtube/g)) {
        icon = <i className="icon-camrecorder"></i>;
      } else {
        icon = <i className="icon-magnifier-add"></i>;
      }
      return (
        <a href="!#" onClick={handleLightbox} className="icon-popup-wrapper">
          {icon}
        </a>
      );
    }
    return null;
  };

  return (
    <>
      <div className="portfolio-item rounded shadow-dark">
        <div className="details">
          <span className="term text-capitalize">{category}</span>
          <h4 className="title">{title}</h4>
          <span className="more-button link-icon">
            {renderLinkIcon()}
          </span>
          <span className="more-button popup-link">
            {renderPopupIcon()}
          </span>
        </div>
        <div className="thumb">
          <img src={image} alt={title} />
          <div className="mask"></div>
        </div>
      </div>
      {popupLink && <FsLightbox toggler={toggler} sources={popupLink} />}
    </>
  );
}

export default Portfolio;

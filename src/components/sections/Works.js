import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "E-Commerce",
  },
  {
    id: 2,
    text: "Media",
  }
];

const allData = [
  {
    id: 1,
    title: "The Buffalo Bills Shop",
    category: "ecommerce",
    image: "images/bills.png",
    popupLink: ["images/bills.png"],
    link: "https://shop.buffalobills.com/",
  },
  {
    id: 2,
    title: "Stylin Online",
    category: "ecommerce",
    image: "images/stylin.png",
    popupLink: [
      "images/stylin.png"
    ],
    link: "https://www.stylinonline.com/",
  },
  {
    id: 3,
    title: "DLT Trading",
    category: "ecommerce",
    image: "images/dlt.png",
    popupLink: ["images/dlt.png"],
    link: "https://www.dlttrading.com/",
  },
  {
    id: 4,
    title: "Fusion Teas",
    category: "ecommerce",
    image: "images/fusion.png",
    popupLink: [
      "images/fusion.png"
    ],
    link: "https://www.fusionteas.com/",
  },
  {
    id: 5,
    title: "District Cutlery",
    category: "ecommerce",
    image: "images/eknives.png",
    popupLink: ["images/eknives.png"],
    link: "https://www.districtcutlery.com/",
  },
  {
    id: 6,
    title: "Bestpresso",
    category: "ecommerce",
    image: "images/bestpresso.png",
    popupLink: ["images/bestpresso.png"],
    link: "https://bestpresso.com",
  },
  {
    id: 7,
    title: "Atlanta Journal Constitution",
    category: "media",
    image: "images/ajc1.png",
    popupLink: ["images/ajc1.png", "images/ajc2.png"],
    link: "https://www.ajc.com/sports/golf/leaderboard/",
  }
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Works" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No more items"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;

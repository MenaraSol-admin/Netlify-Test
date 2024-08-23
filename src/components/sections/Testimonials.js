import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.svg",
    userName: "Denzell Barnett",
    subtitle: "Full Stack Developer at MagMutual Incurance Co.",
    review:
      "Hajar was an asset to our team during my time working with her. She never hesitated to take on difficult tasks and bring them to completion. I could always count on her support for resolving technical issues and providing valuable feedback on design. She maintained a positive attitude and was a reliable resource throughout our projects. I wouldn't hesitate to work with her again in the future."
  },
  {
    id: 2,
    avatar: "images/photo.png",
    userName: "Shane Provost",
    subtitle: "Senior Software Engineer at Intuit",
    review:
      "I taught Gigi (Hajar) at the Georgia Tech Full Stack coding bootcamp in 2017. Gigi was always one of the top performing student in the class and a major contributor in all projects she was a part of. Her attitude and determination were two of the qualities that made her such an outstanding student, and I would be happy to recommend her for any position she would seek. She would be a wonderful addition to any team she is a part of, and I cannot speak highly enough about her.",
  },
  {
    id: 3,
    avatar: "images/avatar-2.svg",
    userName: "Andrew Watson",
    subtitle: "Principal Engineer at Cox Automotive Inc.",
    review:
      "Hajar was a bright student and a fast learner. She worked very hard and learned an amazing amount of material while in my class. She did amazing work both on her individual homework and on group projects and I have no doubt she'll do well as a web developer. It was an honor to have her in my class and I know she's going to do great things!",
  },
  {
    id: 4,
    avatar: "images/avatar-3.svg",
    userName: "Lauren Short",
    subtitle: "Brand Manager at The Icebox Cool Stuff",
    review:
      "Hajar was our Lead BigCommerce Developer when I worked at EYStudios. We worked together on a number of extremely complicated projects. Along with being an incredible developer, Hajar has a wealth of knowledge about BigCommerce and best practices within eCommerce. She was always able to show examples to help show these best practices to customers whenever needed. I came to Hajar frequently with questions when I hit a roadblock with a customer and she was always willing to do research and help provide a solution along with any documentation as needed. She is one of the sweetest people I know and always willing to do whatever it takes to get work done for our clients. Hajar is the definition of a team player and I hope to work with her again in the future! ",
  },
];


function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Recommendations" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;

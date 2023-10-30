import React, { useState } from "react";
import { ReactComponent as LeftArrow } from "../../asset/leftarrow.svg";
import { ReactComponent as RightArrow } from "../../asset/rightarrow.svg";
import "./carousel.css";
import ClientCard from "../ClientCard/clientcard.jsx";
import { Button } from "reactstrap";
import AV1 from "../../asset/avatarForClient/av1.svg";
import AV2 from "../../asset/avatarForClient/av2.svg";
import AV3 from "../../asset/avatarForClient/av3.svg";

const Carousel = () => {
  const avatars = [AV1, AV2, AV3];

  const names = ["Jane Cooper", "Devon Lane", "Robert Fox"];
  const professions = ["CEO of Hunt", "CEO of Hunt", "CEO of Hunt"];
  const content =
    "Amet minim mollit non deserunt ullamco est aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia";

  const totalSlides = avatars.length;
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleLeftNavigation = () => {
    const newIndex =
      activeSlideIndex === 0 ? totalSlides - 1 : activeSlideIndex - 1;
    setActiveSlideIndex(newIndex);
  };

  const handleRightNavigation = () => {
    const newIndex = (activeSlideIndex + 1) % totalSlides;
    setActiveSlideIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="details">
        <div style={{display: "flex", flexDirection: "column"}}>
        <h1 style={{fontWeight: "600"}}>What says our</h1>
        <h1 style={{fontWeight: "600"}}>happy clients</h1>
        </div>
        <div className="arrow-buttons">
          <Button
            onClick={handleLeftNavigation}
            style={{ border: "0", borderRadius: "3rem", padding: "0" }}
          >
            <LeftArrow />
          </Button>
          <Button
            onClick={handleRightNavigation}
            style={{ border: "0", borderRadius: "3rem", padding: "0" }}
          >
            <RightArrow />
          </Button>
        </div>
      </div>
      <div className="client-cards">
        {names.map((nam, index) => {
          const cardBackgroundColor =
            index === activeSlideIndex
              ? "var(--secondary-color)"
              : "var(--primary-color)";
          return (
            <ClientCard
              key={index}
              avatar={avatars[index]}
              name={nam}
              profession={professions[index]}
              content={content}
              cardBackgroundColor={cardBackgroundColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

// import React, { useRef, useState } from "react";
// import { ReactComponent as LeftArrow } from "../../asset/leftarrow.svg";
// import { ReactComponent as RightArrow } from "../../asset/rightarrow.svg";
// import "./carousel.css";
// import Card from "../ClientCard/clientcard.jsx";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Pagination } from "swiper/modules";

// const Carousel = () => {
//   const swiperRef = useRef();
//   const [activeCardIndex, setActiveCardIndex] = useState(0);

//   const handleLeftNavigation = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slidePrev();
//     }
//   };

//   const handleRightNavigation = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slideNext();
//     }
//   };

//   const changeCardBackgroundColor = (index) => {
//     setActiveCardIndex(index);
//   };

//   return (
//     <div className="carousel-container">
//       <div className="details">
//         <div className="details-heading">
//           <h1>
//             <b style={{ fontWeight: "600" }}>What says our</b>
//           </h1>
//           <h1>
//             <b style={{ fontWeight: "600" }}>happy clients</b>
//           </h1>
//         </div>
//         <div className="arrow-buttons">
//           <button
//             className="next"
//             onClick={handleLeftNavigation}
//             style={{ border: "0", borderRadius: "3rem", padding: "0" }}
//           >
//             <LeftArrow />
//           </button>
//           <button
//             className="prev"
//             onClick={handleRightNavigation}
//             style={{ border: "0", borderRadius: "3rem", padding: "0" }}
//           >
//             <RightArrow />
//           </button>
//         </div>
//       </div>
//       <div className="client-cards">
//         <Swiper
//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           className="mySwiper"
//           spaceBetween={20}
//           slidesPerView={1}
//           navigation={true}
//           modules={[Navigation, Pagination]}
//           onSlideChange={(swiper) => changeCardBackgroundColor(swiper.activeIndex)}
//         >
//           <SwiperSlide>
//             <Card isActive={activeCardIndex === 0} />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Card isActive={activeCardIndex === 1} />
//           </SwiperSlide>
//           {/* Add more SwiperSlides as needed */}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

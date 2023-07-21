import React, { useRef, useState } from "react";
import "../slider/Slider.scss";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../../data";
function Slider() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const slideRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = slideRef.current.getBoundingClientRect().x;
    console.log(distance);
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      slideRef.current.style.transform = `translateX(${0}vw)`;
    }
    if (direction === "right" && slideNumber < 3) {
      setSlideNumber(slideNumber + 1);
      slideRef.current.style.transform = `translateX(${slideNumber * -100}vw)`;
    }
  };
  console.log(slideRef.current);
  return (
    <div className='container'>
      <div className='arrow left' onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>
      <div className='wrapper' ref={slideRef}>
        {sliderItems.map((item) => (
          <div className='slide'>
            <div className='imgContainer'>
              <img src={item.img} alt='' />
            </div>
            <div className='infoContainer'>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button>SHOW NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div onClick={() => handleClick("right")} className='arrow right'>
        <ArrowRightOutlined />
      </div>
    </div>
  );
}

export default Slider;

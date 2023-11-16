import React, { useState } from "react";
import "./Grid.css";
import Carousel from "./../Carousel/Carousel";

function Grid() {
  const gridData = [
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/002/215/385/large_2x/continuous-line-drawing-of-of-abstract-beautiful-woman-s-face-minimalist-continuous-linear-sketch-woman-face-vector.jpg",
      title: "BEHIND THE SCENES",
      description: "Collaboration Secrets: Design X Engineering",
    },
    {
      image:
        "https://i.pinimg.com/originals/de/97/e8/de97e85b04f0565c1984cee428796f07.png",
      title: "PRODUCT DESIGN",
      description:
        "From Web Page to Web Player: How Spotify Designed a New Homepage Experience",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/002/035/933/large_2x/water-wave-logo-images-free-vector.jpg",
      title: "BEHIND THE SCENES",
      description: "Designing for the World: An Introduction to Localization",
    },
  ];
  let index=0;
  const [indexFromChild, setIndexFromChild] = useState(0);

  const handleIndexChange = (index) => {
    setIndexFromChild(index);
  };

  const moveIndex = (direction) => {
    if (direction === "left") {
      setIndexFromChild((indexFromChild - 1 + gridData.length) % gridData.length);
        index=(indexFromChild - 1 + gridData.length) % gridData.length;
    } else if (direction === "right") {
      setIndexFromChild((indexFromChild + 1) % gridData.length);
      index=(indexFromChild + 1) % gridData.length;
    }
  };


  return (
    <div className="grid">
      <div className="controlSection">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style={{ transform: "rotate(180deg)" }}
            onClick={() => moveIndex("left")}
          >
            <path fill="#191414" d="M9 18v-5l8 5V6l-8 5V6H7v12z" />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style={{ transform: "rotate(undefineddeg)" }}
            onClick={() => moveIndex("right")}
          >
            <path fill="#191414" d="M9 18v-5l8 5V6l-8 5V6H7v12z" />
          </svg>
        </div>
      </div>

      <div className="descriptionSection">
        <p>{gridData[indexFromChild].title}</p>
        <h1>{gridData[indexFromChild].description}</h1>
      </div>
      <div className="carouselSection">
        <Carousel imagesObj={gridData} onIndexChange={handleIndexChange} startIndex={index}/>
      </div>
    </div>
  );
}

export default Grid;

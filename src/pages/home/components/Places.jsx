import React, { useState } from "react";
import "../../../styles/home/places.css";
import { placeItems } from "../../../data";
import PageWrapper from "../../../util/PageWrapper";

const Places = () => {
  const [end, setEnd] = useState(4); // Initial state to show 4 items

  const handlePaginate = () => {
    // Check if we've displayed more than 8 items and reset to 4
    if (end >= 8) {
      setEnd(4); // Reset to show first 4 items
    } else {
      setEnd((prevEnd) => prevEnd + 4); // Show 4 more items
    }
  };

  return (
    <PageWrapper>
      <div className="placeCon">
        <div className="placeText">
          <p className="popular">Popular Places</p>
          <div className="placeText2">
            <p className="type">
              Discover the world’s most breathtaking destinations, <br />{" "}
              handpicked just for you
            </p>
            <p className="type">Where will your next adventure take you?</p>
          </div>
        </div>

        <div className="placeContainer">
          {placeItems.slice(0, end).map((place, i) => (
            <div key={i} className="placeCard">
              <img src={place.image} alt={place.title} className="placeImage" />
              <h3 className="text">{place.title}</h3>
              <p className="placeText">{place.text}</p>
            </div>
          ))}
        </div>

        <div className="mainBtn">
          <button onClick={handlePaginate} className="placeBtn">
            {end >= 8 ? "Show Less" : "See More"}
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Places;

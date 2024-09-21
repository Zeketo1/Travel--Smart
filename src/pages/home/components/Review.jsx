import React from "react";
import "../../../styles/home/review.css";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";
import darkness from "../../../assets/images/darkness.jpg";
import butterfly from "../../../assets/images/butterfly.jpg";
import red from "../../../assets/images/red.jpg";
import chinese from "../../../assets/images/chinese.jpg";

const Review = () => {
  return (
    <div className="mainReview">
      <div className="reviewText">
        <p className="feedBack">Explorer Feedback</p>
      </div>

      <div className="customReview">
        <div className="reviewCard">
          <div className="profile">
            <img src={darkness} alt="" className="image" />
            <p className="name">John Doe</p>
          </div>

          <p className="review">
            {" "}
            "I had an amazing adventure through the Amazon rainforest! The
            guides were knowledgeable, the views were breathtaking, and every
            moment felt like a new discovery. I highly recommend this tour for
            anyone seeking a thrill in nature!"
          </p>

          <div className="starRating">
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStarHalf className="star" />
          </div>
        </div>
        
        <div className="reviewCard" style={{transform: "translateX(20rem)"}}>
          <div className="profile">
            <img src={butterfly} alt=""  className="image"/>
            <p className="name">John Doe</p>
          </div>

          <p className="review">
            {" "}
            "I had an amazing adventure through the Amazon rainforest! The
            guides were knowledgeable, the views were breathtaking, and every
            moment felt like a new discovery. I highly recommend this tour for
            anyone seeking a thrill in nature!"
          </p>

          <div className="starRating">
            <FaRegStar className="star"/>
            <FaRegStar className="star"/>
            <FaRegStar className="star"/>
            <FaRegStar className="star"/>
            <FaRegStarHalf className="star"/>
          </div>
        </div>

        <div className="reviewCard" style={{transform: "translateX(9.5rem)"}}>
          <div className="profile">
            <img src={red} alt=""  className="image"/>
            <p className="name">John Doe</p>
          </div>

          <p className="review">
            {" "}
            "I had an amazing adventure through the Amazon rainforest! The
            guides were knowledgeable, the views were breathtaking, and every
            moment felt like a new discovery. I highly recommend this tour for
            anyone seeking a thrill in nature!"
          </p>

          <div className="starRating">
            <FaRegStar className="star"/>
            <FaRegStar className="star"/>
            <FaRegStar className="star"/>
            <FaRegStar className="star"/>
            <FaRegStarHalf className="star"/>
          </div>
        </div>

        <div className="reviewCard" style={{transform: "translateX(15rem)"}}>
          <div className="profile">
            <img src={chinese} alt=""  className="image"/>
            <p className="name">John Doe</p>
          </div>

          <p className="review">
            {" "}
            "I had an amazing adventure through the Amazon rainforest! The
            guides were knowledgeable, the views were breathtaking, and every
            moment felt like a new discovery. I highly recommend this tour for
            anyone seeking a thrill in nature!"
          </p>

          <div className="starRating">
            <FaRegStar className="star"/>
            <FaRegStar className="star"/>
            <FaRegStar className="star"/>
            <FaRegStar className="star"/>
            <FaRegStarHalf className="star"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

import React, { useEffect, useRef } from "react";
import "../../../styles/home/trips.css";
import { tripItems } from "../../../data";
import { FaLocationCrosshairs } from "react-icons/fa6";
import PageWrapper from "../../../util/PageWrapper";


const Trips = () => {
  const videoRef = useRef([]);
  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          for (const ref of videoRef.current) {
            if (ref) {
              try {
                await ref.play();
              } catch (e) {
                console.error("Error playing video:", e.message);
              }
            }
          }
        } catch (error) {
          console.log(error);
        }
        console.log(videoRef);
      }
    };
    playVideo();
  }, []);

  return (
      <div className="mainTrip">
        <div className="textTrip">
          <p className="popularTrip">Tours Package</p>
          <p className="tip">
            "Looking to plan the perfect getaway? Let us handle your travel
            arrangements, offering the best destinations tailored to your
            preferences, all within your ideal budget!"
          </p>
        </div>

        <div className="tripContainer">
          {tripItems.map(({ video, place, title, rating }, index) => (
            <div key={index} className="tripCard">
              <div className="videoCard">
                <video
                  src={video}
                  ref={(video) => (videoRef.current[index] = video)}
                  muted
                  playsInline
                  loop
                  className="tripVideos"
                ></video>
              </div>
              <div className="textCon">
                <p className="videoTrip">
                  {" "}
                  <FaLocationCrosshairs className="loacte" /> {place}
                </p>
                <p className="tripText">{title}</p>
                <p className="rating">{rating}</p>
                <button className="tripButton">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Trips;

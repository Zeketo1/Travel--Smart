import React from "react";
import "../../../styles/home/banner.css";
import { PiHouseLineLight } from "react-icons/pi";
import { IoCalendarClearOutline } from "react-icons/io5";
import PageWrapper from "../../../util/PageWrapper";

const Banner = () => {
  return (
    <PageWrapper>
      <div className="bannerCon">
        <div className="bannerDark" />
        <div className="bannerText">
          <p className="bgText">
            Unleash Your Wonderlust <br />
            Travel Smarter, Explore Further
          </p>
          <p className="smText">
            Your dream journey begins here. Explore unforgettable destinations,
            Discover hidden gems, <br /> & plan your trip effortlessly with
            Travel Smart
          </p>

          <div className="searchFilter">
            <div className="gridItems">
              <div className="gridChild" style={{borderLeft: "none"}}>
                <p className="from">From</p>
                <p className="place">Warsaw, Poland</p>
              </div>

              <div className="gridChild">
                <p className="from">To</p>
                <p className="place">Ontario, Canada</p>
              </div>

              <div className="gridChild">
                <p className="from">Date</p>
                <p className="place">March 8, 2022</p>
              </div>

              <div className="gridChild">
                <p className="from">Travelers</p>
                <p className="place">2 People</p>
              </div>

              <div className="gridChild2">
               <input type="text"  placeholder="search"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Banner;

import React from "react";
import Profile from "./phototabcomponents/Profile";
import PartnerPrefer from "./phototabcomponents/PartnerPrefer";
import './styles.css'
import AboutMyself from "./phototabcomponents/AboutMyself";
import ContactDetails from "./phototabcomponents/ContactDetails";

const ProfileTab = () => {
  return (
    <div>
      <Profile/>
      <div className="mt-4">
        <div className="d-flex about-mysleft" style={{ gap: "16px" }}>
          <h5>About Myself</h5>
          <h5 style={{ backgroundColor: "#f7f7f7" }}>
            <a
              href="#partnerPref"
              className=""
              style={{ color: "#000", textDecoration: "none" }}
            >
              Partner Preferences{" "}
              <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
            </a>
          </h5>
        </div>
        <div className="d-flex justify-content-between align-items-center border-top career-top1">
          <h6 className="mini-section-title ">
            Personality,Family Details, Career,Partner Expectations etc.
          </h6>
          <a href="#" className="mini-edit-link text-primary">
            Edit&nbsp;<i className="bi bi-caret-right-fill"></i>
          </a>
        </div>
        <p className="mt-2">
          Thanks for visiting my profile. I put relationships above all. I seek
          a compatible life partner, someone who is understanding and has good
          values. Thank you for your valuable time!
        </p>
      </div>
      <AboutMyself/>
      <PartnerPrefer/>
      <ContactDetails/>
    </div>
  );
};

export default ProfileTab;

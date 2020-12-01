import React from "react";
import { Link } from "gatsby";
import SocialLinks from "../constants/socialLinks";
import profileGif from "../assets/me.gif";

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Ryan</h1>
            <h4>Web developer</h4>
            <Link to="/contact" className="btn">
              Contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <img src={profileGif} className="hero-img" alt="profile gif" />
      </div>
    </header>
  );
};

export default Hero;

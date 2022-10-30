import React from "react";
import classes from "./About.module.css";
import Profile from "../../assets/profile.png";

const About = () => {
  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  return (
    <div className={classes.about}>
      <h1 className={classes.main}>About me</h1>
      <img className={classes.profile} src={Profile} alt="profile" />
      <h5 className={classes["copy-text"]}>
        My name is Angel Tomashevski.I'm {getAge("1988-11-21")} years old
        graduated financial accountant who is really determinated to became a
        programmer. I started a academy for FrontEnd Developer with focus on
        React JS in December, 2021 and finished in September, 2022.I made this
        app like a final project and I hope you will enjoy playing it.
      </h5>
      <h3 className={classes.skills}>Skills</h3>
      <ul className={classes["main-li"]}>
        <li>FrontEnd:</li>
      </ul>
      <ul className={classes["inline-li"]}>
        <li>
          HTML <i className="fa-brands fa-html5"></i>,
        </li>
        <li>
          CSS <i className="fa-brands fa-css3-alt"></i>,
        </li>
        <li>
          Javascript <i className="fa-brands fa-js"></i>,
        </li>
        <li>
          GIT <i className="fa-brands fa-square-git"></i>,
        </li>
        <li>
          React <i className="fa-brands fa-react"></i>,
        </li>
        <li>Redux</li>
      </ul>

      <p className={classes.contact}>Contact Me: </p>
      <div className={classes["contact-links"]}>
        <a href="https://gmail.com/" target="blank">
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a href="https://twitter.com/" target="blank">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://linkedin.com/" target="blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default About;

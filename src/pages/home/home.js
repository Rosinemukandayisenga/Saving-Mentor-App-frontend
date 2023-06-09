import React from "react";
import "./home.css";
import Button from "../../properties/button";
import Image from "./images/2.webp";
import Image1 from "./images/pic.jpeg";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";
import { allData } from "../../constants/index";

function Home() {
  return (
    <div className="savenest-home">
      <div className="savenest-header">
        <div className="savenest-logo">
          {/* <img/> */}
          <h1>LOGO</h1>
        </div>
        <div className="savenest-link">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Who we are</a>
            </li>
            <li>
              <a href="">Connect</a>
            </li>
          </ul>
        </div>
        <div className="savenest-signin">
          <Button btnName="SignIn"></Button>
        </div>
      </div>
      <div className="savenest-intro">
        <div className="savenest-secone">
          <h1>
            Save <br /> With Us
          </h1>
          <p>
            Welcome to MoneCO! We provide a convenient way for saving, whether
            you're an individual or want to be part of a team. Our user-friendly
            interface allows for easy organization and retrieval of your saved
            pages. But that's not all we also offer collaborative features for
            teams. Sign up now and experience the convenience of our saving
            platform.
          </p>
          <Button btnName="Explore more"></Button>
          <span className="left-arrow">
            <MdOutlineArrowForward />
          </span>
        </div>
        <div className="savenest-sectwo">
          <img src={Image} alt="image" />
        </div>
      </div>
      <div className="savenest-about">
        <h1>
          Who <span> we are</span>
        </h1>
        <div className="par">
          <p>
            We strive to help people create and implement financial plans, track
            expenses, and identify areas where they can reduce spending. It
            encourages goal-oriented savings by providing tools to set and track
            financial goals, offering calculators, trackers, and reminders to
            stay on track. Additionally, the website aims to educate users about
            money-saving strategies, investment options, and personal finance
            best practices. Ultimately, the aim is to enable users to take
            control of their finances, develop healthy saving habits, and
            achieve their financial goals through effective planning and smart
            money management.
          </p>
        </div>
      </div>
      <div className="savenest-work">
        <h1 className="hwork">How it works</h1>
        <div className="savenest-cards">
          {allData.map((data) => (
            <div className="card">
              <p className="number">{data.number}</p>
              <h1 className="title">{data.title}</h1>
              <p className="description">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="savenest-test">
        <h1>Testimonials</h1>
        <div className="all-test">
          <div className="test-image">
            <img src={Image1} alt="testimonial-image" />
          </div>
          <div className="test-descri">
            <p>
              Thanks to this saving website, I've transformed my financial
              habits and achieved my savings goals faster than ever before. It's
              an essential tool for anyone looking to take control of their
              finances and build a brighter financial future.
            </p>
            <br />
            <h4>
              Kelly <span>Mons</span>
            </h4>
          </div>
          <div className="test-icon">
            <span>
              <MdArrowForwardIos />
            </span>
            <span>
              <MdArrowBackIosNew />
            </span>
          </div>
        </div>
      </div>
      <div className="savenest-contact">
        <h1>Connect with us</h1>
        <div className="both-savenest">
          <div className="contact-info">
            <h2>
              We would love to <br /> hear from you
            </h2>
            <p className="data">
              Share your feedback with us! We value your thoughts on our
              money-saving website. Contact us today and help us enhance your
              savings experience.
            </p>
            <div className="contact-icon">
              <p className="phone-ic">
                <span>
                  <BsFillTelephoneFill />
                </span>{" "}
                (+250)788263772
              </p>
              <p className="email-ic">
                <span>
                  <MdMarkEmailUnread />
                </span>
                savenest@gmail.com
              </p>
            </div>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="Your Name" className="name" />
            <input type="text" placeholder="Phone Number" className="phone" />
            <br />
            <input type="text" placeholder="Subject" className="subject" />
            <br />
            <textarea
              className="message"
              rows="8"
              placeholder="Message"
            ></textarea>
            <Button btnName="SEND"></Button>
          </div>
        </div>
      </div>
      <div className="savenest-footer">
        <h1>SaveNest</h1>
        <p>
          Start saving and secure your financial future. Our saving website is
          here to help <br /> you achieve your money-saving goals.
        </p>
        <div className="footer-icons">
          <span>
            <BsFacebook />
          </span>
          <span>
            <BsTwitter />
          </span>
          <span>
            <BsLinkedin />
          </span>
          <span>
            <BsInstagram />
          </span>
        </div>
        <div className="footer-lists">
          <ul>
            <li>Home</li>
            <li>Who we are</li>
            <li>Connect</li>
          </ul>
        </div>
        <div className="footer-right">@2023 Savenest | All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Home;

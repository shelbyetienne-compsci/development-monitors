

import React, {useEffect, Component} from "react";
import './style.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import facebook from "./photos/facebook.png";
import instagram from "./photos/instagram.png";
import linkedin from "./photos/linkedin.png";
import twitter from "./photos/twitter.png";
import earth from "./photos/earth.png";



function Contacts () {

  return (
    <>
      <body className="con-body">

          <Head/>
          <div className="body">
            <Fform/>
            <div className="right-side">
              <Office />
              <Inquiries />
            </div>
            </div>
      </body>
    </>
  );
}

function Fform () {
  return(
    <>
      
        <div className="form-bdy">
        <h2>Contact Us</h2>
        {/** 
        <p>We'd love to help and to worl with you. Send us a question or comment with the form below and we'll be in tough with you as soon as possible. </p>
        */}        
        <form id="form" action="">
          <input type="text" name="first-name" placeholder="First Name"/>
          <input type="text" name="last-name" placeholder="Last Name"/>
          <input type="tel" name="phone-number" placeholder="Phone Number"/>
          <input type="email" name="email" placeholder="Email"/>
          <input type="text" name="job-title" placeholder="Job Title"/>
          <input type="text" name="org-name" placeholder="Organization Name"/>
          <select className="select" name="state" >

            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>	
          <textarea name="" id="" cols="30" rows="10" placeholder="Comments"></textarea>
          <button type="submit" className="btn">Submit</button>
        </form> 
        </div>
    </>
  );
}

function Office () {
  return (
    <>
    <div className="first-prt">
      <h3>Office Location</h3>
      <p>Arlington VA, USA <br/> New Dehli, India </p>
      {/** 
      <button type="submit" className="btn">VIEW ICF LOCATIONS</button>
      */}
    </div>
    </>
  );
}

function Inquiries () {
  return (
    <>
    <div className="second-prt">
      <h3>Career Inquiries</h3>
      <p>Have a question about our application process or job postings?</p>
    </div>
    </>
  );
}

function Connect () {
  const socialInfo = (img, para) => {
    return (
      <>
      <div className="socials">
        <img src={img} alt=""/>
        <p>{para}</p>
      </div>
      </>
    );
  }
  return (
    <>
    <div className="third-prt">
      <h3>Connect With Us On Social Media</h3>
      <p>Follow our social media channels to see the many ways we make big things possible.</p>
      {socialInfo(facebook,"Find us on FACEBOOK")}
      {socialInfo(twitter,"Follow us on TWITTER")}
      {socialInfo(linkedin,"Join us on LINKEDIN")}
      {socialInfo(instagram,"Follow us on INSTAGRAM")}
    </div>
    </>
  );
}

function Head () {
  return(
    <>
    <div className="head">
      <img src={earth} alt=""/>
      {/** 
      <div className="lists">
        <ul>
          <li>Career</li>
          <li>Investors</li>
          <li>News</li>
          <li>Events</li>
          <li>ICF Next</li>
        </ul>
        <ul>
          <li><b>WORK</b></li>
          <li><b>BLOG</b></li>
          <li><b>RESOURCES</b></li>
          <li><b>COMPANY</b></li>
          <li><b>CONTACT</b></li>
        </ul>
      </div>
      */}
    </div>
    </>
  );
}

export default Contacts;
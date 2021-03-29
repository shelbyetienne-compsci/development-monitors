import React, {useEffect, Component} from "react";
import './style.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function About () {

  const content = (img, para) => {
    return (
      <>
      <div className="img-p">
        <img src={img} alt="Profile Photo"/>
        <p>{para}</p>
      </div>
      </>
    );
  }

  return (
    <>
      <h1>About</h1>
      
      {content("","Dr. Weeks (Arlington, VA): From 2006 to 2017 Dr. Weeks worked for two large Washington, DC-based international development organizations: International Relief and Development (IRD) and Management Systems International (MSI). While at these organizations, Dr. Weeks designed and led eight international development projects with a total value of over US$250 million in fragile countries (Afghanistan, Sudan, and Yemen) for the World Bank as well as for the US Agency for International Development (USAID) and the US Office of Foreign Disaster Assistance (OFDA)")}
      {content("", "Umesh (Delhi, India): Highly qualified and experienced economist with over 30 years’ experience leading large rural and urban development projects in India and Afghanistan.Founder of Delhi Development Monitoring Services providing quality engineering and administrative support to international organizations operating in Afghanistan. Since it’s founding DDMS has provided qualified Afghan engineers and administrative support services to international partners for three World Bank projects in Afghanistan and one KfWproject and currently employs five full-time staff supported by four consultants providing engineering and administrative support")}
      {content("", "Joel Rhine (Arlington, VA): Experienced in Solidworks, Ansys and AutoCad. Has a strong desire to learn and learn quickly. Has been part of many projects portraying team player characteristics. Portrayed leadership skills as the team leader of a year long (successful) Hovercraft project.")}
    </>
  );
}

export default About;
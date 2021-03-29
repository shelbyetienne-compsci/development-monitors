

import React, { useEffect, Component } from "react";
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function Tools() {

  const contents = (classN, img, head, para) => {
    return (
      <>
        <div className={classN}>
          <img src={img} alt="image" />
          <div>
            <h3>{head}</h3>
            <p>{para}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Tools</h1>



      <div className="tools">

        <p>Development Monitors strives to develop technologies that add value to our Client’s mission.The company has successfully developed and deployed multiple services for the WorldBank, etc.It is our belief that innovative technology solutions require continuous research and development and we do this by funding advanced research through a partnership with Virginia Tech.</p> <br />

        {contents("part-one", "", "Autonomous flight planning for high-resolution imagery capture", "captureLorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua. ")}
        {contents("part-two", "", "3D Cadastreaand disaster risk mapping", "captureLorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua. ")}
        {contents("part-three", "", "Community weather Stations and Mobile App", "captureLorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua. ")}
      </div>
    </>
  );
}

export default Tools;
import React from "react";
import './style.css';


function Projects () {

  const contents = (classN, img, head, para) => {
    return (
      <>
      <div className={classN}>
        <img src={img} alt="image"/>
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
      <h1>Projects</h1>

      <div className="projects">
        {contents("part-one","", "Autonomous flight planning for high-resolution imagery capture","captureLorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua. ")}
        {contents("part-two", "", "3D Cadastreaand disaster risk mapping", "captureLorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua. ")}
        {contents("part-three", "", "Community weather Stations and Mobile App", "captureLorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua. ")}
      </div>
    </>
  );
}

export default Projects;
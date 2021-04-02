// eslint-disable-next-line
import React, {useState} from "react";
import ReactGlobe from "react-globe";
import './style.css';
import {Link} from 'react-router-dom';
import cloud from "./photos/cloud.png";
import bulb from "./photos/bulb.png";
import worldbank from './photos/worldbank.jpg'
import deutschebank from './photos/deutschebank.jpg'
import governmentofafghanistan from './photos/governmentofafghanistan.png'
import mrrd from './photos/mrrd.png'
import cttc from './photos/cttc.png'
import { MdLocationOn } from 'react-icons/md'
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { useEffect } from "react";



function Home () {

  const markers = [
    {
      id: 'marker1',
      city: 'Afghanistan',
      color: 'red',
      coordinates: [33.9391, 67.7100],
      value: 20,
      client: "World Bank",
      project: ["Technical Assistance for School Infrastructure Delivery in Afghanistan, 2018-2020","Disaster Risk Management Training for Afghanistan Government Officials, 2019-2020", "Community-Based Disaster Risk Management and Early Warning, 2019-2021"],
    },
    {
      id: 'marker2',
      city: 'Yemen',
      color: 'blue',
      coordinates: [15.5527, 48.5164],
      value: 20,
      client: "World Bank",
      project: ["Bringing Back Business in Yemen, 2018-2019"],
      },
    {
      id: 'marker3',
      city: 'Frankfurt, Germany',
      color: 'green',
      coordinates: [50.1109, 8.6821],
      value: 20,
      client: "German Bank for Reconstruction",
      project: ["Study on Remote Management, Monitoring, and Verification with a Focus on Fragile Countries and Volatile Environments, 2017-2018"],
    },
    {
      id: 'marker4',
      city: 'Afghanistan',
      color: 'yellow',
      coordinates: [33.9391, 67.7100],
      value: 20,
      client: "World Bank",
      project: ["Disaster Risk Management for Government Counterparts, 2018"],
    },
    {
      id: 'marker5',
      city: 'Afghanistan',
      color: 'purple',
      coordinates: [33.9391, 67.7100],
      value: 20,
      client: "German Bank for Reconstruction",
      project: ["Economic Infrastructure Development Afghanistan, 2018-2021"],
    },
    {
      id: 'marker6',
      city: 'Blacksburg, Virginia',
      color: 'orange',
      coordinates: [37.2296, -80.4139],
      value: 20,
      client: "National Science Foundation, Industry-University Cooperative Research Center, Center for Unmanned Aerial Systems",
      project: ["Aerial Cadastre and infrastructure Assessment for Disaster Risk Management 2020-2021"],
    },
    {
      id: 'marker7',
      city: 'Blacksburg, Virginia',
      color: 'white',
      coordinates: [37.2296, -80.4139],
      value: 20,
      client: "Commonwealth Center for Innovation in Autonomous Systems",
      project: ["Development of disaster risk assessment and recovery technology using low-cost UAVs and opensource AI and GIS tools for application in Virginia, the US, and in developing countries, 2021"],
    },
  ];

  function onClick (e) {
    setTimeout(() => {
      setTrigger(true);
      setClient(e.client);
      setLocation(e.city);
      setProjects(e.project);
    }, 700)
  }

  function coordinates(e){
    if(e.srcElement.nodeName == "CANVAS"){
      setXCoordinates(e.clientX);
      setYCoordinates(e.clientY);
    }
  }

  //popup
  const [trigger, setTrigger] = useState(false);
  const [client, setClient] = useState("");
  const [location, setLocation] = useState("");
  const [projects, setProjects] = useState([]);
  
  const [xcoordinates, setXCoordinates] = useState(0);
  const [ycoordinates, setYCoordinates] = useState(0);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("mousedown", coordinates)
    window.addEventListener("resize", () => setScreenHeight(window.innerHeight))
  }, []);

  return (//onMouseDown={coordinates}
    <>
      <div id="scene">
        <div id="content">
            <h1>We provide governments and global lending institutions with technical consulting services supported by disruptive technologies</h1>
            <p>Discover how we operate all over the globe
            </p>
        </div>
        <div className="three">
          <ReactGlobe
            height="70vh"
            width="70vw"
            globeBackgroundTexture={null}
            markers={markers}
            options={{
              enableGlobeGlow: false,
              focusDistanceRadiusScale: 2.68 ,
              markerTooltipRenderer: marker => marker.city,
              enableMarkerTooltip: trigger ? false : true
            }}
            focus={null}
            onClickMarker={onClick}
          />
        </div>
      </div>
      
      <div className="bg-white">
      <SectionOne/>
      </div>
      <SectionTwo/>
      <SectionThree/>
      <div className="bg-white">
      <SectionFour />
      </div>
      <div className="five-sec">
      <SectionFive />
      </div>
      <div className="foot">
      </div>
      
      <Popup trigger={trigger} setTrig={setTrigger} x={xcoordinates} y={ycoordinates} screenHeight={screenHeight}>
          <span id="arrow"></span>
          <h2>{client}</h2>
          <div className="location">
            <MdLocationOn />
            <h3>{location}</h3>
          </div>
          <hr></hr>
          <div>
            {
              projects.map((value, index) => {
                return <p key={index}>{value}</p>
              })
            }
          </div>
      </Popup>
    </>
  );
}


/*
Popup
*/
function Popup (props) {
  return ( props.trigger ) ? (
    <>
      <div className="popup" onClick={() => props.setTrig(false)}> 
        <div className="popup-inner">
          { props.children }
        </div>
      </div> 
    </>
  ) : "";
}

const content = (img, head, para) => {
  return(
    <>
    <div className="content-items">
      <img className="content-img" src={img} alt="icon"/>
      <div id="head-par">
      <h2>{head}</h2>
      <p>{para}</p>
      </div>
    </div>
    </>
  );
}

function SectionOne() {
  return  (
    <>
        <div className="about-us">
          {content(cloud, "Expertise", "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua")}
          {content(cloud, "Localized", "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua")}
          {content(cloud, "Innovative", "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua")}
          {content(cloud, "Multi-disciplinary", "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua")}
        </div>
    </>
  );
}

function SectionTwo(){
    return(
      <>
        <div className="specialize">
          <div id="title-button">
            <h2>We specialize in disaster risk management</h2>
            <Link to="/about">
              <button>Learn More</button>
            </Link>
          </div>

          {/* <p>
          "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua. Ut enimad minim veniam, quisnostrudexercitation ullamcolaborisnisi utaliquipex eacommodoconsequat. Duis auteiruredolor in reprehenderitin voluptatevelitessecillumdolore eufugiatnullapariatur. Excepteursintoccaecatcupidatatnon proident, sunt in culpa qui officiadeseruntmollitanimid estlaborum."
          </p> */}
        </div>
      </>
    );
}

function SectionThree(){
  return (
    <>
      <div id="sec-three">
        {content(bulb, "Our Mission", "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua")}
        {content(bulb, "Our Mission", "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua")}
        {content(bulb, "Our Mission", "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua")}
      </div>
    </>
  );
}

function SectionFour(){
  return (
    <>
      <div id="sec-four">
        <img src={worldbank} alt="The World Bank"/>
        <img src={deutschebank} alt="Bank of Germany"/>
        <img src={governmentofafghanistan} alt="Government of Afghanistan"/>
        <img src={mrrd} alt="MRRD"/>
        <img src={cttc} alt="CTTC"/>
      </div>
    </>
  );
}

function SectionFive(){

  const contents = (classN, img, head, para) => {
    return (
      <>
      <div className={classN}>
        <img src={img}/>
        <div>
          <h3>{head}</h3>
          <p>{para}</p>
        </div>
      </div>
      </>
    );
  }

  return(
    <>
      <div className="sec-five">
        {contents("part-one","", "Autonomous flight planning for high-resolution imagery capture","captureLorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua. ")}
        {contents("part-two", "", "3D Cadastre and disaster risk mapping", "captureLorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua. ")}
        {contents("part-three", "", "Community weather Stations and Mobile App", "captureLorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua. ")}
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="footer">
        <ul>
          <li>©2021 Relief International</li>
          <li>Terms of Service</li>
          <li>Privacy Statement</li>
          <li>Cookie Notice</li>
        </ul>

        <p>A site by <b>Shelby Etienne</b></p>
      </div>
    </>
  );
}


export default Home;
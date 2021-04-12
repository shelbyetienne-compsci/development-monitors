// eslint-disable-next-line
import React, {useState} from "react";
import ReactGlobe from "react-globe";
import './style.css';
import {Link} from 'react-router-dom';
import worldbank from './photos/worldbank.jpg'
import deutschebank from './photos/deutschebank.jpg'
import governmentofafghanistan from './photos/governmentofafghanistan.png'
import mrrd from './photos/mrrd.png'
import cttc from './photos/cttc.png'
import blue from './photos/blue.png'
import yellow from './photos/yellow.png'
import expert from './photos/expert.png'
import innovate from './photos/innovate.png'
import multi from './photos/multi.png'
import local from './photos/local.png'
import { MdLocationOn } from 'react-icons/md'
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { useEffect } from "react";



function Home () {

  const markers = [
    {
      id: 'marker1',
      city: 'Afghanistan',
      color: '#F1C40F',
      coordinates: [33.9391, 67.7100],
      value: 30,
      client: "World Bank",
      project: ["Technical Assistance for School Infrastructure Delivery in Afghanistan, 2018-2020","Disaster Risk Management Training for Afghanistan Government Officials, 2019-2020", "Community-Based Disaster Risk Management and Early Warning, 2019-2021"],
    },
    {
      id: 'marker2',
      city: 'Yemen',
      color: '#F1C40F',
      coordinates: [15.5527, 48.5164],
      value: 30,
      client: "World Bank",
      project: ["Bringing Back Business in Yemen, 2018-2019"],
      },
    {
      id: 'marker3',
      city: 'Frankfurt, Germany',
      color: '#F1C40F',
      coordinates: [50.1109, 8.6821],
      value: 30,
      client: "German Bank for Reconstruction",
      project: ["Study on Remote Management, Monitoring, and Verification with a Focus on Fragile Countries and Volatile Environments, 2017-2018"],
    },
    {
      id: 'marker4',
      city: 'Afghanistan 2',
      color: '#F1C40F',
      coordinates: [34.9391, 68.7100],
      value: 30,
      client: "World Bank",
      project: ["Disaster Risk Management for Government Counterparts, 2018"],
    },
    {
      id: 'marker5',
      city: 'Afghanistan 1',
      color: '#F1C40F',
      coordinates: [33.9391, 67.7100],
      value: 30,
      client: "German Bank for Reconstruction",
      project: ["Economic Infrastructure Development Afghanistan, 2018-2021"],
    },
    {
      id: 'marker6',
      city: 'Blacksburg, Virginia 1',
      color: '#3498DB',
      coordinates: [38.2296, -81.4139],
      value: 30,
      client: "National Science Foundation, Industry-University Cooperative Research Center, Center for Unmanned Aerial Systems",
      project: ["Aerial Cadastre and infrastructure Assessment for Disaster Risk Management 2020-2021"],
    },
    {
      id: 'marker7',
      city: 'Blacksburg, Virginia 2',
      color: '#3498DB',
      coordinates: [37.2296, -80.4139],
      value: 30,
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
    setSpeed(0.0);
  }

  function coordinates(e){
    if(e.srcElement.nodeName === "CANVAS"){
      setXCoordinates(e.clientX);
      setYCoordinates(e.clientY);
    }
  }

  //popup
  const [trigger, setTrigger] = useState(false);
  const [speed, setSpeed]= useState(0.3);
  const [client, setClient] = useState("");
  const [location, setLocation] = useState("");
  const [projects, setProjects] = useState([]);
  const [focus, setFocus] = useState(null);
  
  const [xcoordinates, setXCoordinates] = useState(0);
  const [ycoordinates, setYCoordinates] = useState(0);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("mousedown", coordinates)
    window.addEventListener("resize", () => setScreenHeight(window.innerHeight))
  }, []);


  /*
  <div className="bg-white">
      <SectionFour />
      </div>
  */

  return (
    <>
      <div id="scene">
        <div id="content">
            <h2>We provide governments and global lending institutions with technical consulting services supported by disruptive technologies</h2>
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
              enableMarkerTooltip: trigger ? false : true,
              enableMarkerTooltip: trigger ? false : true,
              cameraAutoRotateSpeed: speed,
              focusEasingFunction: ['Cubic', 'Out'],
              enableMarkerGlow: false,
              enableCameraZoom: true,
              enableDefocus: false,
              markerRadiusScaleRange: [0.005, 0.015],
            }}
            focus={focus}
            onClickMarker={onClick}
          />
          <Legend/>
          <Legend2/>
        </div>
      </div>
      
      <div className="bg-white">
        <SectionOne/>
      </div>
      <SectionTwo/>
      
      <SectionThree/>
      
      
      
      <div className="five-sec">
      <SectionFive />
      </div>
      <div className="foot">
        <Footer />
      </div>
      
      
      <Popup trigger={trigger} setSpeed={setSpeed}  setTrig={setTrigger} x={xcoordinates} y={ycoordinates} screenHeight={screenHeight} setFocus={setFocus}>
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

  function doFunc ()
  {
    props.setTrig(false)
    props.setSpeed(0.3)
    props.setFocus([0,-15])
  }

  return ( props.trigger ) ? (
    <>
      <div className="popup" > 
        <div className="popup-inner">
          <button onClick={() => doFunc() } >x</button>
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
      <img className="content-img" src={img} alt=""/>
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
          {content(expert, "Expertise", "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua")}
          {content(local, "Localized", "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua")}
          {content(innovate, "Innovative", "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua")}
          {content(multi, "Multi-disciplinary", "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua")}
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
        </div>
      </>
    );
}

function SectionThree(){
  return (
    <>
      <div id="sec-three">
        {content("", "Our Mission", "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua")}
        {content("", "Our Mission", "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua")}
        {content("", "Our Mission", "Lorem ipsum dolor sit amet, consecteturadipiscingelit, sed do eiusmodtemporincididuntutlaboreet dolore magna aliqua")}
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
      <div id="footer">
        <ul>
          <li>©2021 Relief International</li> |
          <li>Terms of Service</li> |
          <li>Privacy Statement</li> |
          <li>Cookie Notice</li>
        </ul>
      </div>
    </>
  );
}

function Legend() {
  const content = (img, p) => {
    return(
    <>
      <img src={img}/>
      <p>{p}</p>
    </>
    )
  }
  return (
    <>
      <div id="legend">
        {content(blue,"Office Locations")}
        {content(yellow,"Projects")}
      </div>
    </>
  );
}

function Legend2() {
  const content = (img, p) => {
    return(
    <>
      <img src={img}/>
      <p>{p}</p>
    </>
    )
  }
  return (
    <>
      <div id="legend2">
        {content("","Zoom In/Out with scroll wheel")}
      </div>
    </>
  );
}


export default Home;
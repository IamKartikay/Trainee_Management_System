import { useState, useContext, createContext } from "react";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import LabCard from "../components/LabCard";
import {Navigate, Link } from 'react-router-dom'

const text =
  "The DRDO was established in 1958 by combining the Defence Science Organisation and some of the technical development establishments. A separate Department of Defence Research and Development was formed in 1980, which later administered DRDO";

const labContext = createContext('');


function Home() {
  const [lab, setLab] = useState('');
  const labHandler = (lab) => {
    setLab(lab);
  }

  return (
    <>
      <Navbar />
      <div className="labCards">
        
          <LabCard labName="DESIDOC" about={text} img={logo} labHandler = {labHandler}/>
          <LabCard labName="ISSA" about={text} img={logo} labHandler = {labHandler} />
          <LabCard labName="CEPTAM" about={text} img={logo} labHandler = {labHandler} />
          
      </div>

      <h1>{lab}</h1>
    </>
  );
}

export default Home;








{
  /* <div className='main'>
        <div className='logo'>
          <img src={logo} alt= "logo should've been here"/>
        </div>
        <div className='links'>
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li><a href='#'>HELLP</a></li>
          </ul>
        </div>
      </div> */
}

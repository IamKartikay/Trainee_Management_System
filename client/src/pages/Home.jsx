import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import LabCard from "../components/LabCard";
import {Navigate, Link } from 'react-router-dom'

const text =
  "The DRDO was established in 1958 by combining the Defence Science Organisation and some of the technical development establishments. A separate Department of Defence Research and Development was formed in 1980, which later administered DRDO";

function Home() {

  const [labs, setLabs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("http://localhost:5001/labs")
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        setLabs(data); // Update the state with the received data
      })
      .catch((error) => {
        console.error("Error fetching labs:", error);
      });
  };

  return (
    <>
      <div className="labCards">
          {
            labs.map((lab) => (
              <LabCard labName={lab} about={text} img={logo} />
            ))
          }     
      </div>
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

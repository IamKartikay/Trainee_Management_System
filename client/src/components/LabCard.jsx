import React from "react";
import {Navigate, Link } from 'react-router-dom'

const LabCard = ({labName, about, img, labHandler}) => {
  return (
    <div>
      <div className="card" style={{width: '18rem'}}>
        <img src={img} alt={labName} className="card-img-top" />
        <div className="card-body" style={{textAlign: "center"}}>
          <h5 className="card-title">{labName}</h5>
          <p className="card-text">
            {about}
          </p>
          <Link to='/DESIDOC_Management_System' className="btn btn-primary" onClick={()=>labHandler(labName)}>
            {labName} Management System
          </Link>

        </div>
      </div>
    </div>
  );
};

export default LabCard;

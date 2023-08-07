import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const MangSys = () => {
  const Navigate = useNavigate();
  const [addTrainee, setAddTrainee] = useState(false);
  const [showTrainee, setShowTrainee] = useState(false);

  if (addTrainee && !showTrainee) {
    Navigate("/addTrainee");
  }

  if (!addTrainee && showTrainee) {
    Navigate("/showTrainee");
  }

  return (
    <>
      <Navbar />

      <div className="d-grid gap-2 mt-xl">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => setAddTrainee(true)}
        >
          Add New Trainee
        </button>

        <button className="btn btn-secondary" type="button" onClick={() => setShowTrainee(true)}>
            Show All Trainees
        </button>

        {/* <Link to='/showTrainee' >
          <button className="btn btn-secondary" type="button">
            Show All Trainees
          </button>
        </Link> */}
      </div>
    </>
  );
};

export default MangSys;

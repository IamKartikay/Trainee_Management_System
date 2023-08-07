import React from "react";
import { useContext } from "react";
import Context from "../../context/StateContext";

//fieldName,mentorName,trainingStart,trainingEnd,trainingPeriod,trainingStatus,setFieldName,setMentorName,setTrainingStart,setTrainingEnd,setTrainingPeriod,setTrainingStatus

const TrainingDetails = (props) => {
  const {
    firstName,
    lastName,
    contactNo,

    tenthSchool,
    tenthMarks,
    twelthMarks,
    twelthSchool,

    fieldName,
    mentorName,
    trainingStart,
    trainingEnd,
    trainingPeriod,
    trainingStatus,
    departmentName,

    fieldNameHandler,
    mentorNameHandler,
    trainingStartHandler,
    trainingEndHandler,
    trainingPeriodHandler,
    trainingStatusHandler,
    departmentNameHandler,
  } = useContext(Context);

  const trainingDetails = {
    mentor_name: mentorName,
    training_field: fieldName,
    training_start: trainingStart,
    training_end: trainingEnd,
    training_period: trainingPeriod,
    training_status: trainingStatus,
  };

  const basicDetails = {
    first_name: firstName,
    last_name: lastName,
    contact_no: contactNo,
  }

  const academicDetails = {
    tenth_School: tenthSchool,
    tenth_grades: tenthMarks,
    twelth_School: twelthSchool,
    twelth_grades: twelthMarks,
  }

  

  const postData = async (e) => {
    e.preventDefault();
    console.log("dd");
    try {
      await fetch("http://localhost:5001/details", {
        method: "POST",
        body: JSON.stringify({
          basicDetails,
          academicDetails,
          trainingDetails,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => console.log(response));
    } catch (error) {
      console.log(error);
    }
  };

  // const printt = (e) =>{

  //   e.preventDefault();
  //   const [syear, smonth, sdate] = trainingStart.split('-');
  //   const [eyear, emonth, edate] = trainingEnd.split('-');

  //   let period = emonth - smonth;
  //   trainingPeriodHandler(period);

  //   const i = {
  //       fieldName: fieldName,
  //       mentorName: mentorName,
  //       trainingStart: trainingStart,
  //       trainingEnd: trainingEnd,
  //       trainingStatus: trainingStatus,
  //       trainingPeriod: trainingPeriod,
  //       departmentName: departmentName,
  //   }

  //   console.log(i);

  // }

  return (
    <div>
      <div className="container">
        <h1>Enter Training Details</h1>
        <form>
          <label>Training Feild</label>
          <input type="text" value={fieldName} onChange={fieldNameHandler} />

          <label>Mentor Name</label>
          <input type="text" value={mentorName} onChange={mentorNameHandler} />

          <label>Training Start Date</label>
          <input
            type="date"
            value={trainingStart}
            onChange={trainingStartHandler}
          />

          <label>Training End Date</label>
          <input
            type="date"
            value={trainingEnd}
            onChange={trainingEndHandler}
          />

          <label>Training Status</label>
          <select value={trainingStatus} onChange={trainingStatusHandler}>
            <option value="Completed"> Completed </option>
            <option value="Ongoing"> Ongoing </option>
          </select>

          <label>Department Name</label>
          <select value={departmentName} onChange={departmentNameHandler}>
            <option value="Web Development"> Web Development </option>
            <option value="HR"> HR </option>
            <option value="Artifical Intelligence">
              {" "}
              Artifical Intelligence{" "}
            </option>
            <option value="Machine Learning"> Machine Learning </option>
            <option value="Robotics"> Robotics </option>
          </select>

          <button onClick={postData}>Submit</button>

          <button onClick={props.prevStep}>
            Go back to step {props.step - 1}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrainingDetails;

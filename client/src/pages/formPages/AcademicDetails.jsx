import React from "react";
import { useContext } from "react";
import Context from "../../context/StateContext";

const TrainingDetails = (props) => {
  const {
    tenthSchool,
    tenthMarks,
    twelthMarks,
    twelthSchool,
    tenthSchoolHandler,
    tenthMarksHandler,
    twelthMarksHandler,
    twelthSchoolHandler,
  } = useContext(Context);

  const status = ["Completed", "Ongoing"];

    const printt = (e) =>{

      e.preventDefault();

      const i = {
          tenthSchool: tenthSchool,
          tenthMarks: tenthMarks,
          twelthMarks: twelthMarks,
          twelthSchool: twelthSchool,
      }

      console.log(i);

    }

  return (
    <div>
      <div className="container">
        <h1>Enter Academic Details</h1>
        <form>
          <label>Enter 10th Details</label>
          <input
            type="text"
            value={tenthSchool}
            placeholder="Enter School Name"
            onChange={tenthSchoolHandler}
          />
          <input
            type="number"
            value={tenthMarks}
            placeholder="Enter Marks in %"
            onChange={tenthMarksHandler}
          />

          <label>Enter 12th Details</label>
          <input
            type="text"
            value={twelthSchool}
            placeholder="Enter School Name"
            onChange={twelthSchoolHandler}
          />
          <input
            type="number"
            value={twelthMarks}
            placeholder="Enter Marks in %"
            onChange={twelthMarksHandler}
          />

          <label>UnderGraduation</label>
          <input
            type="text"
            value={''}
            placeholder="Enter Degree Name"
            onChange={''}
          />
          <input
            type="text"
            value={''}
            placeholder="Enter Organization Name"
            onChange={''}
          />
          <input
            type="number"
            value={''}
            placeholder="Enter Graduation Date"
            onChange={''}
          />
          <label>Enter Semester wise SGPA Results</label>
          <input
            type="number"
            value={''}
            placeholder="Enter Sem1 GPA"
            onChange={''}
          />
          <input
            type="number"
            value={''}
            placeholder="Enter Sem2 GPA"
            onChange={''}
          />
          <input
            type="number"
            value={''}
            placeholder="Enter Sem3 GPA"
            onChange={''}
          />
          <input
            type="number"
            value={''}
            placeholder="Enter Sem4 GPA"
            onChange={''}
          />
          <input
            type="number"
            value={''}
            placeholder="Enter Sem5 GPA"
            onChange={''}
          />

          <button onClick={props.nextStep}>
            Continue to step {props.step + 1}
          </button>

          <button onClick={props.prevStep}>
            Go back to step {props.step - 1}
          </button>

          <button onClick={printt}>
            print
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrainingDetails;

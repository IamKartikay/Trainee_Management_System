import React, { useContext } from "react";
import Context from "../../context/StateContext";

const BasicDetails = ({step, nextStep}) => {
  
  const {
    firstName,
    lastName,
    contactNo,
    address,
    FnameHandler,
    LnameHandler,
    addressHandler,
    contactNHandler,
  } = useContext(Context);
  
  // const handleSubmit = (event) =>{
  //   event.preventDefault()
  //   let FullName = firstName+" "+lastName;
  //   const res = {
  //     name: FullName,
  //     contact: contactNo,
  //     address: address
  //   }
  //   console.log(res)
  // }

  return (
    <div className="container"> 
      <h1>Enter Trainee Basic Details</h1>
      <form onSubmit={nextStep}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            className="form-control"
            onChange={FnameHandler}
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            className="form-control"
            onChange={LnameHandler}
          />
        </div>

        <div>
          <label>Enter Address</label>
          <input
            type="text"
            value={address}
            className="form-control"
            onChange={addressHandler}
          />
        </div>

        <div>
          <label>Enter Contact Number</label>
          <input
            type="number"
            value={contactNo}
            className="form-control"
            onChange={contactNHandler}
          />
        </div>

        <button type="submit" >
          Continue to step {step+1}
        </button>
      </form>  
    </div>
  );
};

export default BasicDetails;

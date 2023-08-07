import React, { useState, useContext, createContext } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo, setContactNo] = useState(0);
  const [address, setAddress] = useState("");

  const [fieldName, setFieldName] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [trainingStart, setTrainingStart] = useState("");
  const [trainingEnd, setTrainingEnd] = useState("");
  const [trainingPeriod, setTrainingPeriod] = useState("");
  const [trainingStatus, setTrainingStatus] = useState("");
  const [departmentName, setDepartmentName] = useState("");

  const [tenthSchool, setTenthSchool] = useState("");
  const [tenthMarks, setTenthMarks] = useState("");
  const [twelthMarks, setTwelthMarks] = useState("");
  const [twelthSchool, setTwelthSchool] = useState("");

  //const [] = useState('');

  const FnameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const LnameHandler = (e) => {
    setLastName(e.target.value);
  };

  const addressHandler = (e) => {
    setAddress(e.target.value);
  };

  const contactNHandler = (e) => {
    setContactNo(e.target.value);
  };

  const fieldNameHandler = (e) => {
    setFieldName(e.target.value);
  };
  const mentorNameHandler = (e) => {
    setMentorName(e.target.value);
  };
  const trainingStartHandler = (e) => {
    setTrainingStart(e.target.value);
  };
  const trainingEndHandler = (e) => {
    setTrainingEnd(e.target.value);
  };
  const trainingPeriodHandler = (period) => {
    setTrainingPeriod(period);
  };
  const trainingStatusHandler = async (e) => {
    setTrainingStatus(e.target.value);
  };
  const departmentNameHandler = (e) => {
    setDepartmentName(e.target.value);
  };

  const tenthSchoolHandler = (e) => {
    setTenthSchool(e.target.value);
  };
  const tenthMarksHandler = (e) => {
    setTenthMarks(e.target.value);
  };
  const twelthMarksHandler = (e) => {
    setTwelthMarks(e.target.value);
  };
  const twelthSchoolHandler = (e) => {
    setTwelthSchool(e.target.value);
  };
  const Handler = (e) => {
    setContactNo(e.target.value);
  };

  return (
    <Context.Provider
      value={{
        firstName,
        lastName,
        contactNo,
        address,
        FnameHandler,
        LnameHandler,
        addressHandler,
        contactNHandler,

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

        tenthSchool,
        tenthMarks,
        twelthMarks,
        twelthSchool,
        tenthSchoolHandler,
        tenthMarksHandler,
        twelthMarksHandler,
        twelthSchoolHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

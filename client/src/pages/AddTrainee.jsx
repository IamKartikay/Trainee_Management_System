import React, { useState } from 'react'
import { StateContext } from '../context/StateContext'
import BasicDetails from './formPages/BasicDetails'
import AcademicDetails from './formPages/AcademicDetails'
import TrainingDetails from './formPages/TrainingDetails'

const AddTrainee = () => {

  const [step, setStep] = useState(1);

  const nextStep = (e) => {
    e.preventDefault();
    console.log(step)
    setStep((prev) => prev+1);
  }
  const prevStep = (e) => {
    e.preventDefault();
    setStep((prev) => prev-1);
  }



  return (
      <StateContext>
        {step === 1 && (<BasicDetails step = {step} nextStep={nextStep}/>)}
        {step === 2 && (<AcademicDetails step = {step} nextStep={nextStep} prevStep={prevStep}/>)}
        {step === 3 && (<TrainingDetails step = {step} />)}


      </StateContext>
  )
}

export default AddTrainee
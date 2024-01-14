import { useState } from 'react'
import {StepperContext} from "./contexts/StepperContext"
import './App.css'
import Stepper from './Components/Stepper'
import StepperControl from './Components/StepperControl'
import Personal from './Components/Steps/Personal';
import Education from './Components/Steps/Education';
import Documents from './Components/Steps/Documents';
import Final from './Components/Steps/final';
function App() {
  const[currentStep,setCurrentStep]=useState(1);
  const[userData,setUserData]=useState('');
  const[finalData,setFinalData]=useState([]);
  const steps = [
    "Personal Details",
    "Education Details",
    "Document upload",
    "Final"
  ];
  const displaySteps=(step)=>{
    switch(step){
      case 1:
        return <Personal/>
      case 2:
        return <Education/>
      case 3:
        return <Documents/>
      case 4:
        return <Final/>;
      default:
      }
  }
  const handleClick=(direction)=>{
    let newStep=currentStep;
    direction==="next"?newStep++:newStep--;
    newStep>0 && newStep <= steps.length && setCurrentStep(newStep);
  }
  return (
  
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white opacity-90">
    {/* Navbar */}
    {/* Stepper */}
    <div className="container horizontal mt-5">
    <Stepper steps={steps} currentStep={currentStep}/>
     

    {/* Display Components */}
     <div className='my-10 p-10'>
      <StepperContext.Provider value={{
        userData,
        setUserData,
        finalData,
        setFinalData
      }}>
        {displaySteps(currentStep)}
      </StepperContext.Provider>
     </div>
    </div>
  
    {/* Navigation Controls */}
    {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>

  )
}

export default App

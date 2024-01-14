import React from 'react'

const StepperControl = ({handleClick,currentStep,steps}) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        {/* back button */}
        <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-slate-400 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep==1 ? "opacity-0 " : ""
        }`}
      >Back</button>
        {/* next button */}
        <button 
        onClick={() =>handleClick("next")}
        className={`bg-blue-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out`}>{currentStep===steps.length-1?"Confirm":"Next"}</button>
    </div>

  )
}

export default StepperControl
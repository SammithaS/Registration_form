import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function Education() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
    <div className="w-full mx-2 flex-1">
    <div className="
    font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
   Board Name
    </div>
    <div className="
    bg-white my-2 p-1 flex border border-gray-400 rounded">
  <input
       onChange={handleChange}
       value={userData["board"] || ""}
       name="board"
       placeholder="Enter your 10th Board Name"
       className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
     />
   </div>
 </div>
 <div className="w-full mx-2 flex-1">
    <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
    roll no
    </div>
    <div className="bg-white my-2 p-1 flex border border-gray-400 rounded">
  <input
       onChange={handleChange}
       value={userData["rollno"] || ""}
       name="rollno"
       placeholder="Enter your rollno"
       className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
     />
   </div>
 </div>
 <div className="w-full mx-2 flex-1">
    <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
   Total Marks
    </div>
    <div className="bg-white my-2 p-1 flex border border-gray-400 rounded">
  <input
       onChange={handleChange}
       value={userData["marks"] || ""}
       name="marks"
       placeholder="Enter total marks"
       className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
     />
   </div>
 </div>
 <div className="w-full mx-2 flex-1">
    <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
   Marks secured
    </div>
    <div className="bg-white my-2 p-1 flex border border-gray-400 rounded">
  <input
       onChange={handleChange}
       value={userData["smarks"] || ""}
       name="smarks"
       placeholder="Enter marks secured"
       className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
     />
   </div>
 </div>
 <div className="w-full mx-2 flex-1">
    <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
   Percentage/CGPA
    </div>
    <div className="bg-white my-2 p-1 flex border border-gray-400 rounded">
  <input
       onChange={handleChange}
       value={userData["per"] || ""}
       name="per"
       placeholder="Enter your 10th percentage/CGPA"
       className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
     />
   </div>
 </div>
    </div>
  )
}

import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";


export default function Documents() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
       <div className="flex flex-col ">
       <div className="w-full mx-2 flex-1">
       <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
      Adhaar number
       </div>
       <div className="bg-white my-2 p-1 flex border border-gray-400 rounded opacity-100">
     <input
          onChange={handleChange}
          value={userData["adhaar"] || ""}
          name="adhaar"
          placeholder="Adhaar number"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>
    </div>
    
    <div className="w-full mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
        Upload adhaar
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-400 rounded ">
        <input
          onChange={handleChange}
          value={userData["adhaardoc"] || ""}
          name="adhaardoc"
          placeholder="upload file"
          type="file"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>
    </div>
    <div className="w-full mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
        Upload 10th marks card
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-400 rounded">
        <input
          onChange={handleChange}
          value={userData["marksdoc"] || ""}
          name="marksdoc"
          placeholder="upload file"
          type="file"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>
    </div>
  </div>
  )
}
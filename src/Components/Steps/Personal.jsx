import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function Personal() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
       <div className="w-full mx-2 flex-1">
       <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
       Full name
       </div>
       <div className="bg-white my-2 p-1 flex border border-gray-400 rounded">
     <input
          onChange={handleChange}
          value={userData["Name"] || ""}
          name="Name"
          placeholder=" Enter applicant's name as per 10th marks card"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>
    </div>
    <div className="w-full mx-2 flex-1">
       <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
       Email Id
       </div>
       <div className="bg-white my-2 p-1 flex border border-gray-400 rounded">
     <input
          onChange={handleChange}
          value={userData["email"] || ""}
          name="email"
          placeholder=" Enter your email id"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>
    </div>
    <div className="w-full mx-2 flex-1">
       <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
       Contact number
       </div>
       <div className="bg-white my-2 p-1 flex border border-gray-400 rounded">
     <input
          onChange={handleChange}
          value={userData["contactno"] || ""}
          name="contactno"
          placeholder=" Enter your phone number"
          type="tel"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>
    </div>
    <div className="w-full mx-2 flex-1">
       <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
       Parent's name
       </div>
       <div className="bg-white my-2 p-1 flex border border-gray-400 rounded">
     <input
          onChange={handleChange}
          value={userData["Name"] || ""}
          name="Name"
          placeholder="Enter parent's name"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>
    </div>
    <div className="items-center">
       <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
       Gender
       </div>
       <div className="flex gap-5 items-center">
  <label className="flex items-center">
    <input
      onChange={handleChange}
      value="male"
      name="gender"
      type="radio"
    />
    Male
  </label>
  
  <label className="flex items-center">
    <input
      onChange={handleChange}
      value="female"
      name="gender"
      type="radio"
    />
    Female
  </label>
  
  <label className="flex items-center">
    <input
      onChange={handleChange}
      value="others"
      name="gender"
      type="radio"
    />
    Others
  </label>
</div>

    </div>
    <div className="w-full mx-2 flex-1">
       <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
       Date of Birth
       </div>
       <div className="bg-white my-2 p-1 flex border border-gray-400 rounded">
     <input
          onChange={handleChange}
          value={userData["dob"] || ""}
          name="dob"
          type="date"
          placeholder=" Enter date of birth"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>
    </div>
    <div className="w-full mx-2 flex-1">
       <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
       Nationality
       </div>
       <div className="bg-white my-2 p-1 flex border border-gray-400 rounded">
     <input
          onChange={handleChange}
          value={userData["nat"] || ""}
          name="nat"
          placeholder=""
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>
    </div>
    <div className="w-full mx-2 flex-1">
       <div className="font-bold h-6 mt-3 text-gray-700 text-xs leading-8 uppercase">
       Address
       </div>
       <div className="bg-white my-2 p-1 flex border border-gray-400 rounded">
     <input
          onChange={handleChange}
          value={userData["address"] || ""}
          name="address"
          placeholder=" Enter your address"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>
    </div>
    
    </div>
  )
}

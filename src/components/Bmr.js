import React, { useState } from 'react';

import 'tailwindcss/tailwind.css';

function BMR() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState(1.24);
  const [isActive, setIsActive] = useState(false);
  const [bmr, setBmr] = useState(0);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(Math. trunc(event.target.value));
    console.log(height)
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleActivityLevelChange = (event) => {
    const valu = event.target.value
    if(valu=="1.2"){
       setActivityLevel(1.24);

    }else if (valu=="1.375"){
      setActivityLevel(1.375);
    }
    else if (valu=="1.55"){
      setActivityLevel(1.55);
    }
    else if (valu=="1.725"){
      setActivityLevel(1.725);
    }
    else if (valu=="1.9"){
      setActivityLevel(1.9);
    }
   
    
    

  };

  const handleIsActiveChange = (event) => {
    setIsActive(event.target.checked);
  }

  const calculateBMR = () => {
    let result;
    if (gender === 'male') {
      result = (10)*(weight) + (6.25) *  (height)  - (5) * (age)+(5);
    } else {
      result = (10)*(weight) + (6.25) *  (height)  - (5) * (age)-(161);
    }
   
    setBmr(result * activityLevel);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="weight">
              Weight (in kilograms)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              type="text"
              value={weight}
              onChange={handleWeightChange}
              placeholder="Enter your weight"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="height">
              Height (in centimeters)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="height"
              type="text"
              value={height}
              onChange={handleHeightChange}
              placeholder="Enter your height"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="text"
              value={age}
              onChange={handleAgeChange}
              placeholder="Enter your age"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
                  Gender
                </label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={handleGenderChange}
                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label htmlFor="male" className="ml-2 mr-8">
                    Male
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={handleGenderChange}
                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label htmlFor="female" className="ml-2">
                    Female
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="activityLevel">
                  Activity Level
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="activityLevel"
                  value={activityLevel}
                  onChange={handleActivityLevelChange}
                >
                  <option value="1.2">Sedentary (little or no exercise)</option>
                  <option value="1.375">Lightly active (light exercise or sports 1-3 days a week)</option>
                  <option value="1.55">Moderately active (moderate exercise or sports 3-5 days a week)</option>
                  <option value="1.725">Very active (hard exercise or sports 6-7 days a week)</option>
                  <option value="1.9">Super active (very hard exercise or sports, physical job or training twice a day)</option>
                </select>
              </div>
             
              <div className="mb-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={calculateBMR}
                >
                  Calculate BMR
                </button>
              </div>
              <div>
                <p className="font-bold text-lg">Your BMR is: {bmr.toFixed(2)} calories per day</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default BMR;
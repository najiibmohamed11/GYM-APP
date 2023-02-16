import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Link } from "react-router-dom";
import Bmi from "./Bmi";
import img from "../gym.png"
import Main from "./Main";
import Bmr from "./Bmr";
function Herow() {
  return (
    <>
    <div className="flex flex-col-reverse  md:flex-row  justify-between mt-10 md:mt-20">
        {/* left */}
        <div className="flex flex-col gap-6 wrap justify-center text-white items-center  mt-0 md:mt-24">
        <h1 className="text-4xl  md:9xl text-center font-extrabold text-yellow-600">Hel cilmi bilaash ah</h1>
        <p className=" text-gray-200 text-center">oo kusaabsan jir dhiska iyo raashinka waxana kuu sii dheer xisaabinta colriska ubahantahay iyo BMI(in cayilantahay iyo in kale)
        </p>
          <div className="flex   justify-center md:justify-start">
              
             <Link to="./calculate"> <button className="bg-yellow-600 text-black hover:-translate-y-1 duration-100
            px-3 py-1  p-2 mx-5 rounded-md" >xisaabi colorigada</button></Link>
              
          </div>
        </div> 

        {/* rigth */}
        <div className="w-100 md:w-3/3 h-100  items-center md:mt-0 ml-20 md:ml-0">
            <img src={img} className=""/>
        </div>
 
      
    </div>
    {/* <BrowserRouter>
    <Routes>
      <Route path="" element={<Main/>}/>
    </Routes>
    
    </BrowserRouter> */}


    <Main/>
    <Bmi/>
  

    </>
  );
}

export default Herow;

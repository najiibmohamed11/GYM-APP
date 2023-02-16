import{useState,useEffect}from "react"
import img from "../gym.png"
import bmi from "./bmi.png"
import Main from "./Main";
function Bmi() {
  const [imput1,setimput1]=useState() //wideth
  const [imput2,setimput2]=useState() //height
  
  const [type ,setType]=useState()  // which one is he is tin or normal or fat
 

  function userinput1(e){
    const input1=e.target.value
    setimput1(input1)
    

    

  }
  function userinput2(e){
    const input2=e.target.value
    setimput2(input2)
    

    

  }
  function calculate (e){
    e.preventDefault()
    const weight=parseFloat(imput1)
    const height=parseFloat(imput2)

    const  resalt=(weight)/(height*height)
    
    if (resalt<18.5){
      setType( `your bmi is: ${ resalt.toFixed(2)} you are uderweight`)

    }else if(resalt>=18.5&&resalt<25){
      setType( `your bmi is: ${ resalt.toFixed(2)} you are NORMAL HEALTH`)


    }else if(resalt>=25&&resalt<30){
      setType( `your bmi is: ${ resalt.toFixed(2)} you are OVERWIEGTH`)


    }else if(resalt>30){
      setType( `your bmi is: ${ resalt.toFixed(2)} you are OBESE`)


    }
    
    
  }


  return (
    <>
    <div className="flex flex-col-reverse  md:flex-row  justify-between mt-10 md:mt-10">
        {/* left */}
        <div className="flex flex-col gap-6 wrap justify-center text-white items-center  mt-0 md:mt-10">
        <h1 className="text-4xl  md:9xl text-center font-extrabold text-yellow-600">xisaabi BMI gaaga</h1>
       
          <form onSubmit={calculate}>
            <div className="mx-auto justify-between ">

              <input name="wediht" onChange={userinput1}  className="appearance-none   w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  placeholder="gali culeeyskaada kg ahaan"/>
              <input name="height"onChange={userinput2}  className="appearance-none   w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  placeholder="gali dhirirkaada cm ahaan" />

            </div>
            
          <div className="flex   justify-center md:justify-start mt-5">
              
              <button type="submit" className="bg-yellow-600 text-black hover:-translate-y-1 duration-100
            px-5 py-1   w-full mx-5 rounded-md" >xisaabi BMI</button>
              
          </div>
          <h1 className="text-center text-xl mt-4  p-1 "> {type}</h1>

          </form>
        
       
        </div> 

        {/* rigth */}
        <div className="w-1/3  md:w-3/3 h-100 items-center md:mt-0 ml-auto mr-auto md:mr-0 md:ml-0">
            <img src={bmi} className=""/>
        </div>
 
      
    </div>
    </>
  );
}

export default Bmi;

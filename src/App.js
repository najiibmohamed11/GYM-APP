import Heder from "./components/Heder"
import Herow from "./components/Herow"
import Exercises from "./components/Exercises"
import './App.css';
import Main from "./components/Main"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Rashin from "./components/Exercises";
import Calculate from "./components/Calculate";
import Footer from "./components/Footer";
import Contacct from "./components/Contacct";
import Bmr from "./components/Bmr";
import Bmi from "./components/Bmi";




function App() {
 
  return (
    <div className="max-w-4xl mx-auto p-2  ">
      <BrowserRouter>
   
      <Heder/>
      <Routes>
        <Route path="/" element={<Herow/>}/>
        <Route path="/bmi" element={<Bmi/>}/>
        <Route path="/calculate" element={<Bmr/>}/>
        <Route path="/contact" element={<Contacct/>}/>
        
      </Routes>
     
      <Footer/>
      </BrowserRouter>
      

      
      

      
     
     

      
      
      
    </div>
  );
}

export default App;

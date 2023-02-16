import React,{useState} from 'react';
import {Link } from "react-router-dom";
import Logo from "./assets/Logo.png";

import { HiMenuAlt1 } from 'react-icons/hi';
function Header(props) {
    const [open,setOpen]=useState(false)
    return (
        <div className="flex  items-center justify-between mb-5 ">
            {/* logo */}
            <div className="text-2xl font-bold text-white d-inline w-[200px]">
                <Link to="/"><img src={Logo}/></Link>
            </div>
            

            {/* large screen navigations */}
            <div className="text-white hidden md:flex items-center  gap-6 font-medium text-gray-600">
            <Link to="/">home</Link>
            <Link to="/bmi">Bmi</Link>
            <Link to="/calculate">calori</Link>
            <div className=" bg-yellow-600 text-black hover:-translate-y-1 duration-100
            px-3 py-1 rounded-lg">
            <Link to="/contact" >contact</Link>
            </div>
            
            </div>

            {/* mobile navigations */}
            <div className={`fixed top-0 z-50 bg-white w-60 h-screen
      shadow-2xl ${
        open ? "right-0" : "right-[-100%]"} md:hidden flex flex-col gap-10 foint-mediam pt-20 p-7`}>
            <Link to="/">home</Link>
            <Link to="/bmi">Bmi</Link>
            <Link to="/calculate">calori</Link>
            <div className="w-24 bg-yellow-600 text-white hover:-translate-y-1 duration-100
            px-3 py-1 rounded-lg">
            <Link to="/contact" >contact</Link>
            </div>

            </div>
            {/* toggle button */}
            <div className= {`text-2xl md:hidden text-white z-50
            ${open?"text-black":"text-white"}`}>
              
                <HiMenuAlt1 className="h-7 cursor-pointer"
                onClick={()=>{setOpen(!open)
                  }}/>
            </div>
            
        </div>
    );
}

export default Header;
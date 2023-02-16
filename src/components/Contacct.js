import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Me from "../me.JPG"
function Contact(props) {
    const form = useRef();
    const [send,setSend]=useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        setSend(true)
        
    
        emailjs.sendForm('service_3xv5x2l', 'template_ml21b3i', form.current, 'i8u028AEWFTvRUqFy')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
   
    return (
        <diV className="mt-20 flex flex-wrap sm:flex-nowrap items-center 
        space-x-5 justify-around p-10 sm:px-6 lg:px-8  bg-white rounded-xl" >
             {/* // left */}
             <div className="space-y-7">
                <h1 className="font-bold text-4xl text-yellow-600">Contact info</h1>
                <p className="text-gray-400">Let connect here send
                     me message i will answer<br/>
                    2 you as soon as possible</p>
                    <div className="text-md flex text-gray-500 space-x-2 items-center">
            <BsFillTelephoneInboundFill />
            <p>+252612544158</p>
            </div>
            <div className="text-md flex text-gray-500 space-x-2 items-center">
            <FiMail />
            <p>abdinajibmohamed304@gmail.com</p>
            </div>
            <div className="text-md flex text-gray-500 space-x-2 items-center">
            <MdLocationPin />
            <p>mogadisho,somalia</p>
            </div>
             </div>


             <div>
             <form
        className="w-full max-w-md space-y-6 mt-10 md:mt-0"
        onSubmit={sendEmail}
        ref={form}

      >
        <input
          type="text"
          placeholder="name"
          className="rounde-sm p-3 w-full border border-gray-200 placeholder-gray-400 focus:outline-none
        focus:ring-indigo-500 focus:border-inigo "
          name="name"
        />
        <input
          type="email"
          placeholder="email"
          className="rounde-sm p-3 w-full border border-gray-200 placeholder-gray-400 focus:outline-none
        focus:ring-indigo-500 focus:border-inigo"
          name="email"
        />
        <textarea
          type="text"
          placeholder="name"
          className="rounde-sm p-8 w-full border
          border-gray-200 placeholder-gray-400 focus:outline-none
          focus:ring-indigo-500 focus:border-inigo"
          name="message"
        ></textarea>
        <button
          type="submit"
          className="w-full p-2 text-lg rounded-md text-white bg-yellow-600 focus:outline-none focus:ring-2 "
        >
          send message
        </button>
        {send && (
          <div
            className="p-4 mb-4 text-green-700 bg-green-100 rounded-lg  "
            role="alert"
          >
            <span className="font-medium">Thanks for your reaction </span> i wil
            contact you as soon as possible
          </div>
        )}
      </form>
             </div>

{/* // right */}



        </diV>
       
      
    );
}

export default Contact;
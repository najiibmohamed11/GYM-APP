
import { GiChickenOven } from 'react-icons/gi';
import { IoMdFitness } from 'react-icons/io';
import { FaBed } from 'react-icons/fa';
import { Link} from "react-router-dom"

function Main() {
 
  return (
    <div className="  mt-20  ">
        <div className="text-3xl font-bold w-[130px] mx-auto text-white text-center font-serif  border-b border-yellow-600">
            <h1>muhiim!</h1>
        </div>
        <div className='my-10 space-y-20'>
        <div className=" md:flex justify-around  gap-7 space-y-20 md:space-y-0 text-white">
            <div>
                <div className='ml-2 text-9xl flex flex-col justify-center items-center'>
                <GiChickenOven className='text-yellow-600' />
                <h2 className='text-2xl font-bold'>rashin</h2>
                </div>
              
                <p className='text-center'> raashinka waxa uu qeeb weeyn ka qaataa dhisida jirka dad ka qaar wexey
               dhahaan raashink waxa uu ka yahay 70% isbadalka jirka </p>
                


            </div>
            <div>
                <div className='text-9xl ml-2  flex flex-col justify-center items-center'>
                <IoMdFitness className='text-yellow-600' />
                <h2 className='text-2xl font-bold'>jimicsi</h2>
                </div>
              
                <p className='text-center'> jimicsiga waa muhiim hadey tahay <a href="https://www.verywellfit.com/what-is-resistance-training-3496094" className='text-blue-400'>resistance training </a>ama cardio misaan iska dhin ama isku dar 2dab waad ubahantahay jimicsi </p>
                


            </div>
        
          
        </div> 
            <div className='flex md:flex-col justify-around  text-white'>
            <div>
                    <div className='ml-2 text-9xl flex flex-col justify-center items-center'>
                    <FaBed className='text-yellow-600 '  />
                    <h2 className='text-2xl font-bold'>nasiino</h2>
                    </div>
                
                    <p className='text-center'> nasiinada waa shey muhiim ah sawab too ah hadii adan nasan muraqa recovory (reeysasho)maseemeenayo madama malin kasto dhawaceeysid(ku almiiteyneysid) </p>
                    


            </div>
        </div>
        
        </div>
        
    </div>
  );
}

export default Main;

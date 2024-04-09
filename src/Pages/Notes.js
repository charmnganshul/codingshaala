import React from 'react'
import Header from '../Components/Header'
import Capture from '../Notes/Capture.PNG'
import C2 from '../Notes/c-2.png'
import { useNavigate } from 'react-router-dom'


function Notes() {
  const navigate = useNavigate()
  return (
    <div className=' py-2 w-full flex flex-col items-center'>
      <Header></Header>
      
        
        <div className='w-full flex flex-wrap justify-between  bg-[#282A35] p-20'>
          <div onClick={()=>navigate('/html')} className='w-[30%] p-10 bg-[#D9EEE1] flex flex-col cursor-pointer items-center gap-5 rounded-[10px]'>
            <label className='text-5xl font-bold'>HTML</label>
            <button className='bg-[#282A35] text-white p-2 px-4 rounded-[20px]'>Learn HTML</button>
          </div>
          <div onClick={()=>navigate('/notes/css')} className='w-[30%] p-10 bg-[#D9EEE1] flex flex-col cursor-pointer items-center gap-5 rounded-[10px]'>
            <label className='text-5xl font-bold'>CSS</label>
            <button className='bg-[#282A35] text-white p-2 px-4 rounded-[20px]'>Learn CSS</button>
          </div>
          <div onClick={()=>navigate('/javascript')} className='w-[30%] p-10 cursor-pointer bg-[#D9EEE1] flex flex-col items-center gap-5 rounded-[10px]'>
            <label className='text-5xl font-bold'>Javascript</label>
            <button className='bg-[#282A35] text-white p-2 px-4 rounded-[20px]'>Learn Javascript</button>
          </div>
          

        </div>

        


      
    </div>
  )
}

export default Notes

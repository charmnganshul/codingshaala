import React from 'react'
import Header from '../Components/Header'
import Capture from '../Notes/Capture.PNG'
import css1 from '../Notes/css1.png'
import css2 from '../Notes/css2.png'
import css3 from '../Notes/css3.png'
import css4 from '../Notes/css4.png'
import css5 from '../Notes/css5.png'
import css6 from '../Notes/css6.png'
import css7 from '../Notes/css7.png'
import css8 from '../Notes/css8.png'
import css9 from '../Notes/css9.png'
import css10 from '../Notes/css10.png'


function Notes() {
  return (
    <div className='px-4 py-2 w-full flex flex-col items-center'>
        <Header></Header>
        <div className='lg:w-[60%] w-[90%] my-4'>
            <div className='flex flex-col items-center'>
                <label className='lg:text-[40px] text-[25px] bg-[#00E0FF] text-white w-full text-center'>1. CSS – OVERVIEW</label>
                <img src={css1}></img>
                <img className='mt-4' src={css2}></img>
                <img className='mt-4' src={css3}></img>
                <img className='mt-4' src={css4}></img>

            </div>
            <div className='flex flex-col items-center'>
                <label className='lg:text-[40px] text-[25px] bg-[#00E0FF] text-white w-full text-center'>2. CSS – PROPERTIES</label>
                <img src={css5}></img>
                {/* <img className='mt-4' src={css6}></img> */}
                <img className='mt-4' src={css7}></img>

            </div>
            <div className='flex flex-col items-center'>
                <label className='lg:text-[40px] text-[25px] bg-[#00E0FF] text-white w-full text-center'>3. CSS – FONTS</label>
                <img src={css8}></img>
            </div>
            <div className='flex flex-col items-center'>
                <label className='lg:text-[40px] text-[25px] bg-[#00E0FF] text-white w-full text-center'>4. CSS – TEXT</label>
                <img src={css9}></img>
            </div>
            <div className='flex flex-col items-center'>
                <label className='lg:text-[40px] text-[25px] bg-[#00E0FF] text-white w-full text-center'>5. CSS – BORDER</label>
                <img src={css10}></img>
            </div>
            <div className='flex flex-col items-center'>
                <label className='lg:text-[40px] text-[25px] bg-[#00E0FF] text-white w-full text-center'>6. CSS – POSITION</label>
                <img src={css6}></img>
            </div>
        </div>


      
    </div>
  )
}

export default Notes

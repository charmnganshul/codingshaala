import React from 'react';
import Logo from '../images/Logo.png'


function SliderText() {
  return (
    <div>
      <div  id="scroll-container">
        <div className='h-24  w-[100%] flex gap-10' id="scroll-text"> 
        <img className='h-24 w-[33%]' alt='' src={Logo}></img>
        <img className='h-24 w-[33%]' alt='' src={Logo}></img>
        <img className='h-24 w-[33%]' alt='' src={Logo}></img>
        </div>
      </div>
    </div>
  );
}

export default SliderText;

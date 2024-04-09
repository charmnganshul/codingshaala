import React from 'react'

function CourseDetail() {
  return (
    <div className='flex flex-col items-center gap-10 my-20'>
        <label className='text-[40px]'>Course Details</label>
        <div className='flex flex-wrap justify-between'>
            <div className='lg:w-[30%] w-[90%] lg:ml-0 ml-[10%] flex flex-col'>
                <label className='text-[50px] font-extrabold text-green-100'>01</label>
                <div className='flex bg-green-200'>
                    <div className='bg-white p-4 drop-shadow-lg items-center flex w-[250px] rounded-[20px] relative top-[50px] left-[-40px]'>
                        <img className='w-[200px]' src='https://codersid.com/wp-content/uploads/2022/09/java-scriptprice.svg'></img>
                    </div>
                    <div className='flex flex-col py-4 px-4 ml-[-20px]'>
                        <label className='text-[20px] font-bold'>Node Js</label>
                        <label>Basic overview of what you will learn from our 45 Days of Nodejs training in Indore.</label>

                    </div>
                </div>
                <div className='flex flex-col pt-[70px] gap-8 border px-8 pb-[20px]'>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i> Database designing</label>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i> Modular programming & NPM</label>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i> MVC</label>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i> Build reusable modules</label>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i> Distributable packages</label>
                    <div className='pl-[100px] flex items-center'>
                    <button className='bg-green-500 text-white p-2 text-[20px] rounded-[10px]'>Read More</button>
                    </div>
                </div>
            </div>
            <div className='lg:w-[30%] w-[90%] lg:ml-0 ml-[10%] flex flex-col'>
                <label className='text-[50px] font-extrabold text-pink-100'>02</label>
                <div className='flex bg-pink-200'>
                    <div className='bg-white p-4 drop-shadow-lg items-center flex w-[250px] rounded-[20px] relative top-[50px] left-[-40px]'>
                        <img className='w-[200px]' src='https://codersid.com/wp-content/uploads/2022/10/fulls.svg'></img>
                    </div>
                    <div className='flex flex-col py-4 px-4 ml-[-20px]'>
                        <label className='text-[20px] font-bold'>Full Stack</label>
                        <label>Basic overview of what you will learn from our 6 months of Fullstack training in Indore.</label>

                    </div>
                </div>
                <div className='flex flex-col pt-[70px] gap-8 border px-8 pb-[20px]'>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i> TypeScript, Component & Template</label>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i> Angular Http Calls</label>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i> Styling and Animations</label>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i> Service Workers and PWA</label>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i> Deployment with firebase</label>
                    <div className='pl-[100px] flex items-center'>
                    <button className='bg-red-500 text-white p-2 text-[20px] rounded-[10px]'>Read More</button>
                    </div>
                </div>
            </div>
            <div className='lg:w-[30%] w-[90%] lg:ml-0 ml-[10%] flex flex-col'>
                <label className='text-[50px] font-extrabold text-blue-100'>03</label>
                <div className='flex bg-blue-200'>
                    <div className='bg-white p-4 drop-shadow-lg items-center flex w-[250px] rounded-[20px] relative top-[50px] left-[-40px]'>
                        <img className='w-[200px]' src='https://codersid.com/wp-content/uploads/2022/09/react-js-icon.svg'></img>
                    </div>
                    <div className='flex flex-col py-4 px-4 ml-[-20px]'>
                        <label className='text-[20px] font-bold'>React Js</label>
                        <label>Basic overview of what you will learn from our 45 Days of Reactjs training in Indore.</label>

                    </div>
                </div>
                <div className='flex flex-col pt-[70px] gap-8 border px-8 pb-[20px]'>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i> Build Single Apps, interactive forms</label>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i>  Build isomorphic React applications</label>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i> Setup and use the create react app</label>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i> Test using Jest, React Testing Library</label>
                    <label><i class="fa fa-check mr-2" aria-hidden="true"></i>  Code Splitting</label>
                    <div className='pl-[100px] flex items-center'>
                    <button className='bg-blue-500 text-white p-2 text-[20px] rounded-[10px]'>Read More</button>
                    </div>
                </div>
            </div>
            

        </div>
      
    </div>
  )
}

export default CourseDetail

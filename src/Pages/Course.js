import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function App() {
  return (
    <>
    <div className='lg:px-28 px-4'>
        <Header></Header>
      <div className='full-course lg:pl-[25px] flex flex-col lg:w-[1000px] py-6'>
        <label className='lg:text-[35px] text-[30px]'>Full-Stack Development Course Syllabus (2023 updated)</label>
        <label className='text-[20px] mt-[30px]'>Here is a list of modules covered under CodingShaala's full-stack development certification course.</label>
        <label className='text-[20px] mt-[10px]'>Full-stack development refers to the method of applying both front-end and back development protocols to develop websites. This field has been gaining popularity in recent years due to the growing number of digital businesses. It combines the work of managing servers and databases and system engineering. Full-stack developers are in great demand across the world. </label>
        <label className='text-[25px] mt-[30px]'>Full-Stack Development Course Modules :  </label>
        <ul className='text-[20px] mt-[20px] leading-[35px]'>
          <li>1. Overview</li>
          <li>2. HTML</li>
          <li>3. CSS</li>
          <li>4. Programming with Javascript</li>
          <li>5. ReactJS Development</li>
          <li>6. NodeJS Development</li>
          <li>7. MongoDB</li>
          <li>8. Python</li>
          <li>9. Live Projects</li>
         
        </ul>
        {/* <label className='text-[20px] mt-[10px]'>CodingShaala is an AI-powered online platform that was built to educate and equip students and any interested person with skills, which will help them get a job and do well with it. We equally have a strong offline presence with our CodingShaala learning centres operating in various cities across India, and in other countries like Singapore, Malaysia, and Oman.  </label>
        <label className='text-[20px] mt-[10px]'>Our comprehensive HR research made us aware that the expectations that recruiters and freshers or professionals with a lateral career shift have were different from the reality. </label>
        <label className='text-[20px] mt-[10px]'>The aim of our institute is to bridge that gap and provide practical tools to equip students and professionals for the ever-demanding job industry. That is one reason why CodingShaala offers the “most comprehensive industry aligned job ready “full stack developer course syllabus”, amongst the other courses.  </label> */}
        <label className='text-[30px] mt-[20px]'>Full-Stack Development Course Modules  </label>
        <label className='text-[20px] mt-[10px]'>CodingShaala’s full stack development course modules are designed by experts who have extensive experience in the industry in addition to being excellent teachers. CodingShaala promotes multifaceted learning experience. Here, students get a chance to test codes in lab sessions and work on mini projects and also one capstone project, all of which go towards the credits earned in completing the course. </label>
        <label className='text-[20px] mt-[10px]'>The duration of the full-stack course is 6 months. All the batches are worked out within a similar time frame. The syllabus has been designed keeping the needs of students in mind.</label>
        <label className='text-[25px] mt-[10px]'>The full-stack course content at CodingShaala comprises the following modules -</label>
        <label className='text-[35px] mt-[10px]'>Module 1 of Full stack developer course syllabus: HTML </label>
        <label className='text-[20px] mt-[10px]'>HTML is the basic and must have skill-set for every web developer. It is used and extended by various other technologies. To be completely able to understand how things work in web development, you should develop an understanding of HTML. In this section, you will learn</label>
        <ul className='text-[20px] mt-[20px] leading-[35px] list-disc ml-5'>
          <li>Introduction to HTML</li>
          <li>Browsers and HTML</li>
          <li>Editor’s Offline and Online</li>
          <li>Tags, Attribute and Elements</li>
          <li>Doctype Element</li>
          <li>Comments</li>
          <li>Headings, Paragraphs, and Formatting Text</li>
          <li>Lists and Links</li>
          <li>Images and Tables</li>
        </ul>
        <label className='text-[35px] mt-[10px]'>Module 2: of Full stack developer course syllabus: CSS </label>
        <label className='text-[20px] mt-[10px]'>CSS is another important language amongst the web development trifecta. It will help you style, plan a layout and control the behaviour and look and feel of the web apps that you build. In this module, you will learn:</label>
        <ul className='text-[20px] mt-[20px] leading-[35px] list-disc ml-5'>
          <li> Introduction CSS</li>
          <li>Applying CSS to HTML </li>
          <li> Selectors, Properties and Values</li>
          <li>CSS Colors and Backgrounds</li>
          <li> CSS Box Model</li>
          <li>CSS Margins, Padding, and Borders </li>
          <li>CSS Text and Font Properties </li>
          <li>CSS General Topics </li>
        </ul>

        <img src='https://CodingShaala-staticfiles.s3.ap-south-1.amazonaws.com/images/blog/full-stack-development-course-modules.png' className='lg:w-[600px] w-full lg:h-[400px] lg:ml-[30%]'>
        </img>
        <label className='text-[35px] mt-[10px]'>Module 3 of Full stack developer course syllabus: JavaScript </label>
        <label className='text-[20px] mt-[10px]'>The third one amongst the must learn trifecta, Js is present in about 90% of the internet. To make sense of what you’re doing and to design and build new web apps, this language is used predominantly, and it is indispensable. In this section you will learn the following topics:</label>
        <ul className='text-[20px] mt-[20px] leading-[35px] list-disc ml-5'>
          <li>Introduction to JavaScript </li>
          <li> Applying JavaScript (internal and external)</li>
          <li> Understanding JS Syntax</li>
          <li> Introduction to Document and Window Object</li>
          <li> Variables and Operators</li>
          <li> Data Types and Num Type Conversion</li>
          <li> Math and String Manipulation</li>
          <li> Objects and Arrays</li>
          <li>Date and Time </li>
          <li> Conditional Statements</li>
          <li> Switch Case </li>
          <li> Looping in JS</li>
          <li> Functions</li>
        </ul>
        <img src='https://i.ytimg.com/vi/jS4aFq5-91M/maxresdefault.jpg' className='lg:h-[400px] lg:w-[600px] lg:ml-[30%]'></ img>

        <label className='text-[35px] mt-[10px]'>Module 4 of Full stack developer course syllabus: ReactJS </label>
        <label className='text-[20px] mt-[10px]'>Reactjs is the best and most popular framework for front-end development. An integral part of the MERN stack, its community is great, and the demand for reactjs specialists is only increasing day-by-day. React is great for Rapid app development, SPAs and for creating awesome responsive and interactive web apps. In this topic you will learn:</label>
        <ul className='text-[20px] mt-[20px] leading-[35px] list-disc ml-5'>
          <li> Introduction</li>
          <li> Templating using JSX</li>
          <li> Components, State and Props</li>
          <li>Lifecycle of Components </li>
          <li> Rendering List and Portals</li>
          <li> Error Handling</li>
          <li>Routers </li>
          <li> Redux and Redux Saga</li>
          <li> Immutable.js</li>
          <li> Service Side Rendering</li>
          <li> Unit Testing</li>
          <li> Webpack</li>
        </ul>
        <img src='https://s3.amazonaws.com/angularminds.com/blog_images/4dbfbf5df4bc75c52b32ff35c859e3ec.png' className='lg:h-[400px] lg:w-[600px] lg:ml-[30%]'></ img>


        <label className='text-[35px] mt-[10px]'>Module 5 of Full stack developer course syllabus: NodeJS </label>
        <label className='text-[20px] mt-[10px]'> Nodejs is a great skill to have. It is JS based, and it completes the javascript full stack experience. It is a backend skill, which is in demand and pays well. In this module, you will learn the following:</label>

        <ul className='text-[20px] mt-[20px] leading-[35px] list-disc ml-5'>
          <li>Node js Overview</li>
          <li>Node js - Basics and Setup</li>
          <li>Node js Console</li>
          <li>Node js Command Utilities</li>
          <li>Node js Modules</li>
          <li>Node js Concepts</li>
          <li>Node js Events</li>
          <li>Node js with Express js</li>
          <li>Node js Database Access</li>
</ul>

<img src='https://media.geeksforgeeks.org/wp-content/uploads/20230726113229/Concept-of-nodejs.webp' className='lg:h-[400px] lg:w-[600px] lg:ml-[30%]'></ img>


<label className='text-[35px] mt-[10px]'>Module 6 of Full stack developer course syllabus: MongoDB</label>
<label className='text-[20px] mt-[10px]'> This is a data driven schema-less NoSql database. It is a great tool to know. The syntax is very similar to javascript making it much easier to learn. You can use this for projects of any size and is also very easy to scale up or down depending on your requirements. In this module, you will learn:</label>
<ul className='text-[20px] mt-[20px] leading-[35px] list-disc ml-5'>
  <li>SQL and NoSql Concepts </li>
  <li> Create and Manage MongoDB</li>
  <li>Migration of Data into MongoDB </li>
  <li>MongoDB with PHP </li>
  <li>MongoDB with NodeJS </li>
  <li> Services Offered by MongoDB</li>
  </ul>

  <img src='https://www.scaler.com/topics/images/mongoose-vs-mongodb_thumbnail.webp' className='lg:h-[400px] lg:w-[600px] lg:ml-[30%]'></ img>


  <label className='text-[35px] mt-[10px]'> Module 7 of Full stack developer course syllabus: Python</label>
  <label className='text-[20px] mt-[10px]'> Learn the basics of python and use it to develop applications. Also learn to work with mongodb in python. This additional language is a value-added skill as python is increasingly in demand for full stack projects. In this module, you will learn:</label>
  <ul className='text-[20px] mt-[20px] leading-[35px] list-disc ml-5'>
    <li>Python Installation & Configuration </li>
    <li>Developing a Python Application </li>
    <li>Connect MongoDB with Python </li>
</ul>

      </div>
      
      
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
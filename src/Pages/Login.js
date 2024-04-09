import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LoginCss from './Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StudentDetails from '../json/Student.json'



function Login() {
  
    // useEffect(()=>{getLoginData()},[])
    const navigate = useNavigate()
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [loginData, setLoginData] = useState([])

    const getLoginData = ()=>{
        axios.get('http://localhost:5001/api/login').then((res)=>setLoginData(res.data.data))
    }

    const checkLogin = ()=>{
      const userList = StudentDetails.filter((i)=>i.userName == username )
      if (userList.length>0){
        if (userList[0].password == password){
          localStorage.setItem("username", username)
          navigate('/access-yourself')
        }
        else{
          alert("Password didn't match")
        }

      }
      else {
        alert("Username doesn't exist")
      }
    }
  return (
    <div className="">
      <Header></Header>
     <div className="h-[100vh]">
      <div class="container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <h1 className="text-[30px]">Please Login First</h1>
          <input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
          <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
          <button onClick={()=>checkLogin()} className="bg-[#7874B2] text-white p-2 text-[20px]">Submit</button>
          <h2>&nbsp;</h2>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Login;

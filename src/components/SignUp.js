import React, { useContext, useState } from 'react'
import { TaskListContext } from '../contexts/TaskListContext';

import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const {signup}=useContext(TaskListContext)

    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");

    const state={
        id:Date.now(),
        username:username,
        password:password,
      }

    const navigate=useNavigate();


  return (
    <div className='signup-container'>
        <input type="email" placeholder='enter username' className='task-input' value={username} onChange={(e)=>{setUserName(e.target.value)}} required/>
        <input type="password" placeholder='enter password' className='task-input' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
        <button className='btn add-task-btn login-btn' onClick={()=>{signup(state,navigate)}}>SignUp</button>
    </div>
  )
}

export default SignUp
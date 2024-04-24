import React, { useContext, useState } from "react";
import { TaskListContext } from '../contexts/TaskListContext';
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useContext(TaskListContext);

  const navigate=useNavigate();


  return (
    <div className="signup-container">
      <input
        type="text"
        placeholder="enter username"
        className="task-input"
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="enter password"
        className="task-input"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        className="btn add-task-btn login-btn"
        onClick={() => {
          login(username, password,navigate);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;

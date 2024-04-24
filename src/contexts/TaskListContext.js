import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialState);

  let token=localStorage.getItem("token");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [editItem, setEditItem] = useState(null);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);

    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );

    console.log(newTasks);

    setTasks(newTasks);
    setEditItem(null);
  };

  const signup = (state, navigate) => {
    if (state.username !== "" && state.password !== "") {
      console.log(state);
      const oldarr = JSON.parse(localStorage.getItem("users")) || [];
      // console.log(oldarr);
      const newarr = [...oldarr, state];
      localStorage.setItem("users", JSON.stringify(newarr));
      navigate("/");
    }
  };


  const login=(username,password,navigate)=>{

    const data=JSON.parse(localStorage.getItem("users"));
    let user=data.find((item)=>{
      return item.username===username || item.password===password
    })

    if(user){
      localStorage.setItem("token",true);
      window.location.href="dashboard"
    }
  }

  const logout=()=>{
    localStorage.removeItem("token");
    window.location.href="/"
  }

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        findItem,
        editTask,
        editItem,
        signup,
        login
        ,logout,
        token
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;

import React from "react";
import TaskListContextProvider from "../contexts/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "../App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const App = () => {
  let token = localStorage.getItem("token");
  return (
    <TaskListContextProvider>
      {/* <div className="container">
        <div className="app-wrapper"> */}
      <Router>
        <Header />
        <div className="container">
          <div className="app-wrapper">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              {token ? (
                <Route
                  path="/dashboard"
                  element={
                    <>
                      <div className="main">
                        <TaskForm />
                        <TaskList />
                      </div>
                    </>
                  }
                />
              ) : (
                <Route path="/signup" element={<SignUp />} />
              )}

              <Route path="*" element={<h1>NO URL FOUND!.....</h1>} />
            </Routes>
          </div>
        </div>
      </Router>
      {/* </div>
      </div> */}
    </TaskListContextProvider>
  );
};

export default App;

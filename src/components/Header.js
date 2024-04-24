import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskListContext } from "../contexts/TaskListContext";

const Header = () => {
  const { logout, token } = useContext(TaskListContext);

  return (
    <div className="header">
      <ul className="header-links">
        {!token ? (
          <>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        ) : (
          <li
            onClick={() => {
              logout();
            }}
          >
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;

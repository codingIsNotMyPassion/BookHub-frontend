import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";
import { getUser, islogin, logout } from "../reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);
  const LoggedIn = useSelector(islogin)

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="header-container">
        <Link to="/" className="title" id="title">
          <h1>Book Hub</h1>
        </Link>
        {LoggedIn ? (
          <div>
            {
              (user.isAdmin)&&<Link to="/addbook"> Add Book</Link>
            }
            <button onClick={handleClick}>Logout</button>  
          </div>
        ) : (
          <div>
            <Link to="/login">login</Link>
            <Link to="/signup">signup</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

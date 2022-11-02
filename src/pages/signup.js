import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css"
import { signup } from "../reducers/authSlice";
import { useDispatch }from "react-redux"

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name:"",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const data = { ...inputs };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signup(data));
      setInputs({
        name: "",
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
      <h1>Please Enter signUp Details</h1>
        <form className="book-form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup
import React, { useState } from "react";
import "../styles/addBook.css";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { addBook } from "../reducers/BookSlice";

const AddBook = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [inputs, setInputs] = useState({
    title: "",
    author: "",
    image: "",
    description: ""
  });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addBook(inputs)).then(setInputs({
      title: "",
      author: "",
      image: "",
      description: ""
    }))
    navigate("/")
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={inputs.title}
              onChange={handleChange}
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <label>author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={inputs.author}
              onChange={handleChange}
              placeholder="Enter author"
            />
          </div>
          <div className="form-group">
            <label>description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={inputs.description}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </div>
          <div className="form-group">
            <label>image</label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={inputs.image}
              onChange={handleChange}
              placeholder="Enter imageUrl"
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

export default AddBook;

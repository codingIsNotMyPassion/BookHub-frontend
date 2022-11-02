import React from "react";
import { Link } from "react-router-dom";
import UpdateBook from "../pages/updateBook";
import DeleteBook from "../pages/deleteBook";
import "../styles/book.css";
import { useSelector } from "react-redux";
import { getUser, islogin } from "../reducers/authSlice";

const Book = ({ book }) => {
  const { _id, title, author, description, image } = book;
  const user = useSelector(getUser);
  const LoggedIn = useSelector(islogin);
  return (
    LoggedIn && (
      <div key={_id}>
        <div className="card">
          <div>
            <div>
              <img className="card-img-top" src={image} alt="Card cap" />
            </div>
            <div className="card-body">
              <h4>By {author}</h4>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
            {user.isAdmin && (
              <div className="crud-button">
                <div>
                  <Link to={`/updatebook/${_id}`} element={<UpdateBook />}>
                    <button type="button" className="btn btn-primary">
                      update
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to={`/deletebook/${_id}`} element={<DeleteBook />}>
                    <button type="button" className="btn btn-primary">
                      Delete
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Book;

import { useEffect} from "react";
import Book from "../components/book";
import "../styles/home.css";
import { useSelector, useDispatch } from "react-redux";
import { islogin, getUser } from "../reducers/authSlice";
import { booksState, getBooks } from "../reducers/BookSlice";

const Home = () => {
  const dispatch = useDispatch()
  const LoggedIn = useSelector(islogin);
  const user = useSelector(getUser);
  const books = useSelector(booksState)

  useEffect(() => {
      LoggedIn &&
      dispatch(getBooks())
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div>
        {
          books.length !==0 && <h1>{`Hi ${user.name}, welcome to the book keeper`}</h1>
        }
        {books.length !==0 ? (
          <div className="books-container">
            {books.map((book, i) => {
              return (
                <div key={i}>
                  <Book book={book} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="welcome">
            <h1>{`Hi ${user.name}, welcome to the book keeper`}</h1>
            {user.isAdmin && (
              <p>
                You have the special opportunity to do CRUD operation of Books.
                Please click on the add book option in the header to continue
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

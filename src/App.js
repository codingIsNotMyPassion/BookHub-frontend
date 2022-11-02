import Home from "./pages/home"
import AddBook from "./pages/addBook"
import {Routes, Route} from "react-router-dom"
import UpdateBook from "./pages/updateBook";
import DeleteBook from "./pages/deleteBook";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Welcome from "./pages/welcome";
import { useSelector } from "react-redux";
import { islogin } from "./reducers/authSlice";
import Header from "./components/header";

function App() {
  const LoggedIn = useSelector(islogin)
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={LoggedIn ? <Home/> : <Welcome/>}/>
        <Route path="/addbook" element={<AddBook/>}/>
        <Route path="/updatebook/:id" element={<UpdateBook/>}/>
        <Route path="/deletebook/:id" element={<DeleteBook/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;

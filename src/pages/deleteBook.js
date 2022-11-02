import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "../styles/deleteBook.css"
import {useDispatch} from "react-redux"
import { deleteBook } from '../reducers/BookSlice'

const DeleteBook = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleDelete = async ()=>{
        await dispatch(deleteBook(id)).then(navigate("/"))
    }

  return (
    <div className='confirm'>
    <div className='delete'>
        <p>Please confirm to delete the book</p>
        <button className="btn btn-primary" onClick={handleDelete}>Confirm</button>
    </div>
    </div>
  )
}

export default DeleteBook
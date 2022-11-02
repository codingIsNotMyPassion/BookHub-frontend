import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "../styles/addBook.css"
import "../styles/updateBook.css"
import api from '../api/api'
import {updateBook } from '../reducers/BookSlice'
import {useDispatch} from "react-redux"

const UpdateBook = () => {
  const [inputs, setInputs] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getBook = async (id) => {
    try {
      const response = await api.get(`/books/${id}`)
      setInputs({
        title:response.data.title,
        author:response.data.author,
        description:response.data.description,
        image:response.data.image
      })
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBook(id)
    // eslint-disable-next-line 
  }, [id])

  const handleChange = (e) => {
    setInputs((prevState)=>({ ...prevState, [e.target.name]: e.target.value }))
  }

  const updatedData = {data:inputs,id:id}

  const handleUpdate = async (e) => {
    e.preventDefault()
    await dispatch(updateBook(updatedData))
    .then(() => navigate("/"))
  }

  return (
    <>
    <div style={{textAlign:'center'}}>
    <h1>Please fill the update form</h1>
    </div>
      
      <div className='form'>
        <div className='form-container'>
          <form className='book-form' onSubmit={handleUpdate}>
            <div className="form-group">
              <label>title</label>
              <input type="text" className="form-control" name="title" defaultValue={inputs.title} onChange={handleChange} placeholder="Enter title" />
            </div>
            <div className="form-group">
              <label>author</label>
              <input type="text" className="form-control" name="author" defaultValue={inputs.author} onChange={handleChange} placeholder="Enter author" />
            </div>
            <div className="form-group">
              <label>description</label>
              <input type="text" className="form-control" name="description" defaultValue={inputs.description} onChange={handleChange} placeholder="Enter description" />
            </div>
            <div className="form-group">
              <label>image</label>
              <input type="text" className="form-control" name="image" defaultValue={inputs.image} onChange={handleChange} placeholder="Enter imageUrl" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateBook
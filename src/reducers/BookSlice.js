import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const getBooks = createAsyncThunk("book/getBooks", async () => {
  try {
    const response = await api.get("/books");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addBook = createAsyncThunk("book/addBook", async (data) => {
  try {
    const response = await api.post("/books", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const updateBook = createAsyncThunk(
  "book/updateBook",
  async ({data,id}) => {
    try {
      const response = await api.put(`/books/${id}`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteBook = createAsyncThunk("book/deleteBook", async (id) => {
  try {
    const response = await api.delete(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books:[]
  },
  reducers: {},
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
    },
    [addBook.fulfilled]: () => {
      console.log("add book fulfilled");
    },
    [updateBook.fulfilled]: () => {
      console.log("Update fulfilled");
    },
    [deleteBook.fulfilled]: (state,action) => {
      state.books = []
    },
  },
});

export const booksState = (state) => state.book.books;
export default bookSlice.reducer;

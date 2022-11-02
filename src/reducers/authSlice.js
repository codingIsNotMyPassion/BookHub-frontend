import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api"

export const signup = createAsyncThunk(
    "auth/signup", async (data)=>{
      const response = await api.post("/signup",data)
      return response.data
    }
)
export const login = createAsyncThunk(
  "auth/login", async (data)=>{
    const response = await api.post("/login",data)
    return response.data
  }
)
export const logout = createAsyncThunk(
  "auth/logout", async ()=>{
    const response = await api.post("/logout")
    console.log(response.data)
    return response.data
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    isloggedIn:false
  },
  reducers:{},
  extraReducers:{
    [signup.fulfilled]:({payload})=>{
      return payload
    },
    [login.fulfilled]:(state, action)=>{
      state.isloggedIn = true
      state.user = action.payload.user
    },
    [logout.fulfilled]:(state, action)=>{
      console.log("logout fulfilled")
      state.user = {}
      state.isloggedIn=false
    }
  }
});

export const getUser = (state)=>state.auth.user
export const islogin = (state)=>state.auth.isloggedIn
export default authSlice.reducer
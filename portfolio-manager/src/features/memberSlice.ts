import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  memberInfo: "member full name"
}

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers:{
    update_member:(state, action)=>{
      state.memberInfo = action.payload
    }
  }
})
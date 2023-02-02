import { createSlice } from "@reduxjs/toolkit";

import { PORTFORLIO } from "../data";

const initialState = {
  memberInfo: PORTFORLIO.member
}

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers:{
    create_member: (state, action)=>{
      state.memberInfo = action.payload
    },
    update_member:(state, action)=>{
      state.memberInfo = action.payload
    },
    delete_member:(state, action)=>{
      state.memberInfo = action.payload
    }
  }
})

export default memberSlice.reducer
export const {create_member, update_member, delete_member} = memberSlice.actions
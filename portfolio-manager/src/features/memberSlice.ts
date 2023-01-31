import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  memberInfo: "memberinfo object will be here"
}

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers:{
    get_member:(state, action)=>{
      state.memberInfo = action.payload
    },
    update_member:(state, action)=>{
      state.memberInfo = action.payload
    }
  }
})

export default memberSlice.reducer
export const {get_member, update_member} = memberSlice.actions
import { createSlice } from "@reduxjs/toolkit";
import { PORTFORLIO } from "../data";

const initialState = {
  projectInfo: PORTFORLIO.project
}

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    create_project: (state, action)=>{
      state = action.payload
    },
    update_project:(state, action)=>{
      state = action.payload
    },
    // delete_project:(state, action)=>{
    //   state = state.splice(action.payload, 1)
    // }
  }
})

export default projectSlice.reducer
export const {create_project, update_project} = projectSlice.actions
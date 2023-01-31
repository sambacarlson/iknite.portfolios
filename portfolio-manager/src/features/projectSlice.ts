import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  projectInfo: "project information"
}

const projectSlice = createSlice({
  name: "projectaname",
  initialState,
  reducers: {
    get_project:(state, action)=>{
      state.projectInfo = action.payload
    },
    update_project:(state, action)=>{
      state.projectInfo = action.payload
    }
  }
})

export default projectSlice.reducer
export const {get_project, update_project} = projectSlice.actions
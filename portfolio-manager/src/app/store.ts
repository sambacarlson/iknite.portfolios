import { configureStore} from "@reduxjs/toolkit";
import memberReducer from "../features/memberSlice";
import projectReducer from "../features/projectSlice";

const store = configureStore({
  reducer: {
  project: projectReducer,
  member: memberReducer
  }
})

export default store
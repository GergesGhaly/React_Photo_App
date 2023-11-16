import { createSlice } from "@reduxjs/toolkit";

// const valuInlocalStorge=()=>{
//   if(valuInlocalStorge){
//     return localStorage.getItem("theme")
//   }else{
//     return false;
//   }
// }

const initialState = {
  theme: false,
};

export const Them = createSlice({
  name: "Them",
  initialState,
  reducers: {
    Dark: (state) => {
      state.theme = true;
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
    Light: (state, action) => {
      state.theme = false;
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
  },
});

// Action creators are generated for each case reducer function
export const { Dark, Light } = Them.actions;

export default Them.reducer;

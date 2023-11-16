import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const FechCat = createAsyncThunk("Data/FechCat", async () => {
    const data = await fetch("https://melodious-flashy-increase.glitch.me/catgories");
    const res = await data.json();
    return res;
  });
  

export const Categories = createSlice({
    name: "Data",
    initialState: [],
    extraReducers: (builder) => {
      
      builder.addCase(FechCat.fulfilled, (state, action) => {
        return (state = action.payload);
      });
  
    },
  });
  
  // Action creators are generated for each case reducer function
  export const {} = Categories.actions;
  
  export default Categories.reducer;
  
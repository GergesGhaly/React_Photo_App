import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const getTokeken = () => {
//   return localStorage.getItem("token");
// };

export const FechData = createAsyncThunk("Data/FechData", async () => {
  const data = await fetch("https://melodious-flashy-increase.glitch.me/card");
  const res = await data.json();
  return res;
});

export const AddData = createAsyncThunk("Data/AddData", async (card) => {
  const data = await fetch(
    "https://melodious-flashy-increase.glitch.me/card/",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        cat: card.cat,
        title: card.title,
        img: card.img,
        tokken: card.tokken,
      }),
    }
  );
  const res = await data.json();
  return res;
});
export const DeletData = createAsyncThunk("Data/DeletData", async (id) => {
  const data = fetch(`https://melodious-flashy-increase.glitch.me/card/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
  return data;
});

export const SearchData = createAsyncThunk("Data/Search", async (search) => {
  const data = fetch(
    `https://melodious-flashy-increase.glitch.me/card?title=${search}`
  ).then((res) => res.json());
  return data;
});

export const CathData = createAsyncThunk("Data/CathData", async (cat) => {
  const data = fetch(
    `https://melodious-flashy-increase.glitch.me/card?cat=${cat}`
  ).then((res) => res.json());
  return data;
});

export const DataSlice = createSlice({
  name: "Data",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(FechData.fulfilled, (state, action) => {
      return (state = action.payload);
    });
    builder.addCase(AddData.fulfilled, (state, action) => {
      state = action.payload;
    });
    builder.addCase(SearchData.fulfilled, (state, action) => {
      return (state = action.payload);
    });
    builder.addCase(CathData.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = DataSlice.actions;

export default DataSlice.reducer;

import { configureStore } from '@reduxjs/toolkit'
import  Them  from './ThemSlice'
import DataSlice from './DataSlice'
import Categories from './Categories'

export const store = configureStore({
  reducer: {
    Them:Them,
    Data:DataSlice,
    Categories:Categories
  },
})


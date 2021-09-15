import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FaLastfmSquare } from 'react-icons/fa';


// export const fetchtabs = createAsyncThunk(
//   '/dashboard',
//   async (ids,thunkAPI) => {
//     // let url = dashboard
//     // const response = await apiCaller(url, 'GET', {})
//     // return response.data
//   }
// )
export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    displayValue:false,
    sidebarTabs: []
  },
  reducers: {
    setdisplayValue:(state,action)=>{
        state.displayValue = action.payload;
      },
    setSidebarTabs:(state,action)=>{
      state.sidebarTabs = action.payload;
     // state.sidebarTabs.push(action.payload);
      // console.log("side",state.sidebarTabs.push(action.payload))
    }
    
  }
});

export const { setdisplayValue,setSidebarTabs} = sidebarSlice.actions;

export default sidebarSlice.reducer;

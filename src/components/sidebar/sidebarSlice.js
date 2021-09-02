import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    displayValue:false,
  },
  reducers: {
    setdisplayValue:(state,action)=>{
        state.displayValue = action.payload;
      },
  }
});

export const { setdisplayValue } = sidebarSlice.actions;

// export const loadSidebarmenu = () =>  dispatch => {
//     dispatch(setdisplayValue());
   
// }
export default sidebarSlice.reducer;

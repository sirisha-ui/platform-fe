import { createSlice } from '@reduxjs/toolkit';

export const reportSlice = createSlice({
  name: 'reports',
  initialState: {
    displayValue:false,
  },
  reducers: {
    setdisplayValue:(state,action)=>{
        state.displayValue = action.payload;
      },
  }
});

export const { setdisplayValue } = reportSlice.actions;

// export const loadSidebarmenu = () =>  dispatch => {
//     dispatch(setdisplayValue());
   
// }
export default reportSlice.reducer;

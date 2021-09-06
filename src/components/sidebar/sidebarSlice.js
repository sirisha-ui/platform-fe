import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    displayValue:false,
    reportStatus:false,
    reportNavStatus:false,
    dashboardStatus:false,
    dashboardNavStatus:false,
  },
  reducers: {
    setdisplayValue:(state,action)=>{
        state.displayValue = action.payload;
      },
    setReportStatus:(state,action)=>{
      state.reportStatus =action.payload;
    },
    setReportNavStatus:(state,action)=>{
      state.reportNavStatus =action.payload;
    },
    setDashboardStatus:(state,action)=>{
      state.dashboardStatus =action.payload;
    },
    setDashboardNavStatus:(state,action)=>{
      state.dashboardNavStatus =action.payload;
    }     
  }
});

export const { setdisplayValue,setReportStatus,setReportNavStatus,setDashboardStatus,setDashboardNavStatus} = sidebarSlice.actions;

// export const loadSidebarmenu = () =>  dispatch => {
//     dispatch(setdisplayValue());
   
// }
export default sidebarSlice.reducer;

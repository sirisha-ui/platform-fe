import { createSlice } from '@reduxjs/toolkit';
import { FaLastfmSquare } from 'react-icons/fa';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    displayValue:false,
    sidebarTabs: [],
    dashboardStatus: false,
  },
  reducers: {
    setdisplayValue:(state,action)=>{
        state.displayValue = action.payload;
      },
    setSidebarTabs:(state,action)=>{
      state.sidebarTabs =action.payload;
    },
    // setReportNavStatus:(state,action)=>{
    //   state.reportNavStatus =action.payload;
    // },
    setDashboardStatus:(state,action)=>{
      state.dashboardStatus =action.payload;
    },
    // setDashboardNavStatus:(state,action)=>{
    //   state.dashboardNavStatus =action.payload;
    // },
    // setPlayerSearchStatus:(state,action)=>{
    //   state.playerSearchStatus =action.payload;
    // },
    // setPlayerSearchNavStatus:(state,action)=>{
    //   state.playerSearchNavStatus =action.payload;
    // },
    // setSidebarListItems:(state,action)=>{
    //   state.sidebarListItems =action.payload;
    // },
    // setNewplayerStatus:(state,action)=>{
    //   state.newplayerStatus =action.payload;
    // },
    // setNewplayerNavStatus:(state,action)=>{
    //   state.newplayerNavStatus =action.payload;
    // }
  }
});

export const { setdisplayValue,setSidebarTabs} = sidebarSlice.actions;

// export const loadSidebarmenu = () =>  dispatch => {
//     dispatch(setdisplayValue());
   
// }
export default sidebarSlice.reducer;

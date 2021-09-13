import { createSlice } from '@reduxjs/toolkit';
import { FaLastfmSquare } from 'react-icons/fa';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    displayValue:false,
    reportStatus:false,
    reportNavStatus:false,
    dashboardStatus:false,
    dashboardNavStatus:false,
    playerSearchStatus:false,
    playerSearchNavStatus:false,
    newplayerStatus: false,
    newplayerNavStatus: false,
    sidebarListItems: [],
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
    },
    setPlayerSearchStatus:(state,action)=>{
      state.playerSearchStatus =action.payload;
    },
    setPlayerSearchNavStatus:(state,action)=>{
      state.playerSearchNavStatus =action.payload;
    },
    setSidebarListItems:(state,action)=>{
      state.sidebarListItems =action.payload;
    },
    setNewplayerStatus:(state,action)=>{
      state.newplayerStatus =action.payload;
    },
    setNewplayerNavStatus:(state,action)=>{
      state.newplayerNavStatus =action.payload;
    }
  }
});

export const { setdisplayValue,setReportStatus,setReportNavStatus,setDashboardStatus,setDashboardNavStatus,setPlayerSearchStatus,setPlayerSearchNavStatus,setSidebarListItems,setNewplayerStatus,setNewplayerNavStatus} = sidebarSlice.actions;

// export const loadSidebarmenu = () =>  dispatch => {
//     dispatch(setdisplayValue());
   
// }
export default sidebarSlice.reducer;

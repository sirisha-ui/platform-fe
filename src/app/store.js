import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../components/Dashboard/dashboardSlice';
import sidebarReducer from '../components/sidebar/sidebarSlice';
import reportReducer from '../components/Reports/reportSlice';
import appSliceReducer from '../components/AppSlice';
import playerSearchReducer from '../components/playerTable/playerSearchTableSlice';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    sidebar: sidebarReducer,
    reports: reportReducer,
    appslice: appSliceReducer,
    playersearch: playerSearchReducer,
  },
});

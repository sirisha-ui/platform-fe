import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../components/Dashboard/dashboardSlice';
import sidebarReducer from '../components/sidebar/sidebarSlice';
import reportReducer from '../components/Reports/reportSlice';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    sidebar: sidebarReducer,
    reports: reportReducer,
  },
});

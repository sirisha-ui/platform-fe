import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../components/Dashboard/dashboardSlice';
import sidebarReducer from '../components/sidebar/sidebarSlice';
export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    sidebar: sidebarReducer,
  },
});

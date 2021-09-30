import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../components/Dashboard/dashboardSlice';
import sidebarReducer from '../components/sidebar/sidebarSlice';
import reportReducer from '../components/Reports/reportSlice';
import appSliceReducer from '../components/AppSlice';
import playerSearchReducer from '../components/playerTable/playerSearchTableSlice';
import loginHistoryReducer from '../components/LoginHistory/loginHistoryTableSlice';
import paymentHistoryReducer from '../components/paymentHistory/paymentHistoryTableSlice';
export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    sidebar: sidebarReducer,
    reports: reportReducer,
    appslice: appSliceReducer,
    playersearch: playerSearchReducer,
    loginHistorySlice: loginHistoryReducer,
    paymentHistorySlice: paymentHistoryReducer,
  },
});

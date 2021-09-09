import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const AppSlice = createSlice({
    name: 'appslice',
    initialState: {
      selectedMainTab: 'match',
      eventInfo: {
        countryId: '',
        
      }
    },
    reducers: {
        setMainTab: (state, action) => {
          state.selectedMainTab = action.payload;
        },
    },
});
    export const {setMainTab} = AppSlice.actions;
	export const getEvenId = ( props) => dispatch => {
		var path = window.location.pathname;
        path = path.split("/");
		path = path.join("/")
		props.history.push(path)
		}


export default AppSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { apiCaller } from '../../api/apiCaller';
import { playerapi } from '../../sharedfiles/EndpointConfig';

export const PaymentHistorySlice = createSlice({
    name: 'paymentHistorySlice',
    initialState: {
        playerData:[],
       paginationFirstValue: 1,
       paginationSecondValue: 25,
       errorMessage: '',
       userid: '',
       paymentData:[]
      },
   reducers : {
    setPaymentHistorySearch: (state,action)=>{
      state.paymentData =action.payload;
     },
     setPaginationFirstValue: (state,action)=>{
      state.paginationFirstValue =action.payload;
     },
     setPaginationSecondValue: (state,action)=>{
      state.paginationSecondValue =action.payload;
     },
     setErrorMessage: (state,action)=>{
      state.errorMessage =action.payload;
     }
   }
});
export const { setPaymentHistorySearch,setPaginationFirstValue,setPaginationSecondValue,setErrorMessage } =PaymentHistorySlice.actions;


  export const getPaymentHistorytableList = (pagenumbervalue,itemperpagevalue,params) => dispatch => {
    //  dispatch(setEventList([]))
     // dispatch(setCompetitionsList([]))
     console.log("params",params)
      // //var url = playerapi.getPlayerSearch;
      //  var url = `${playerapi.getPlayerSearch}param=%7B%22userName%22%3A%20%22edellabbate6%22%7D`;
       //var url = `${playerapi.getPlayerSearch}search=%7B%22userName%22%3A%22edellabbate6%22%7D`;
       var obj={
        
        "paymentType": params.activity,
         "status": params.pagenumbervalue,
         "itemsPerPage": params.itemperpagevalue,
      }
     // var url = `${playerapi.getLoginHistory}`+"?itemsPerPage ="+pagenumbervalue+"&pageNumber="+itemperpagevalue;
      var url = `${playerapi.getPaymentHistory}`+params.id+"?&pageNumber="+pagenumbervalue+"&itemsPerPage="+itemperpagevalue;
     
      apiCaller(url,'POST',obj)
      .then((response)=>{
        if(response !==null && response){
          if(response.status == 200){
            dispatch(setErrorMessage(response.message))
          }
          dispatch(setPaymentHistorySearch(response.data))
        
       }
      })
    
    }
  
  export default PaymentHistorySlice.reducer;
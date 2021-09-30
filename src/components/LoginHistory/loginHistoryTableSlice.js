import { createSlice } from '@reduxjs/toolkit';
import { apiCaller } from '../../api/apiCaller';
import { playerapi } from '../../sharedfiles/EndpointConfig';

export const LoginHistorySlice = createSlice({
    name: 'loginHistorySlice',
    initialState: {
        playerData:[],
       paginationFirstValue: 1,
       paginationSecondValue: 25,
       errorMessage: '',
       userid: '',
       userData:[]
      },
   reducers : {
     setLoginHistorySearch: (state,action)=>{
      state.userData =action.payload;
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
export const { setLoginHistorySearch,setPaginationFirstValue,setPaginationSecondValue,setErrorMessage } =LoginHistorySlice.actions;

// export const getplayerList = (props) => dispatch => {
//   //  dispatch(setEventList([]))
//    // dispatch(setCompetitionsList([]))
//     var url = playerapi.getPlayer;
//     apiCaller(url,'GET',{})
//     .then((response)=>{
//       if(response.data!==null && response.data){
//         dispatch(setPlayerSearch(response.data))
//         // dispatch(formCoutries(response.data))
//         //dispatch(getCompetitionsList(params.countryId,params.competitionId,"",languageId,'','',props))
//       }
//     })
//   }
  export const getLoginHistorytableList = (pagenumbervalue,itemperpagevalue,params) => dispatch => {
    //  dispatch(setEventList([]))
     // dispatch(setCompetitionsList([]))
     console.log("params",params)
      // //var url = playerapi.getPlayerSearch;
      //  var url = `${playerapi.getPlayerSearch}param=%7B%22userName%22%3A%20%22edellabbate6%22%7D`;
       //var url = `${playerapi.getPlayerSearch}search=%7B%22userName%22%3A%22edellabbate6%22%7D`;
       var obj={
        
        "activity": params.activity,
         "pageNumber": params.pagenumbervalue,
         "itemsPerPage": params.itemperpagevalue,
      }
     // var url = `${playerapi.getLoginHistory}`+"?itemsPerPage ="+pagenumbervalue+"&pageNumber="+itemperpagevalue;
      var url = `${playerapi.getLoginHistory}`+params.id+"/activity"+"?&pageNumber="+pagenumbervalue+"&itemsPerPage="+itemperpagevalue;
     
      //var url = `${playerapi.getPlayerSearch}+"?itemsPerPage="+${paginationFirstValue}+"&pageNumber="+${paginationSecondValue}`;
      //var data ={"itemsPerPage ": params.itemsPerPage,"pageNumber": params.pageNumber }
      //var param;
      //var url = `${playerapi.getPlayerSearch}`'
     // https://dev.platform-ups.sportsit-tech.net/player/search?param="user_name":"palyer1"
      apiCaller(url,'POST',obj)
      .then((response)=>{
        if(response !==null && response){
          if(response.status == 200){
            dispatch(setErrorMessage(response.message))
          }
          dispatch(setLoginHistorySearch(response.data))
          //sconsole.log("gg",response)
       }
      })
    
    }
  
  export default LoginHistorySlice.reducer;
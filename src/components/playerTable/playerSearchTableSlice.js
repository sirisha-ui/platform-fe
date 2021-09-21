import { createSlice } from '@reduxjs/toolkit';
import { apiCaller } from '../../api/apiCaller';
import { playerapi } from '../../sharedfiles/EndpointConfig';

export const playerSlice = createSlice({
    name: 'playersearch',
    initialState: {
        playerData:[]
       
        
      },
   reducers : {
     setPlayerSearch: (state,action)=>{
      state.playerData =action.payload;
     }  
   }
});
export const { setPlayerSearch } =playerSlice.actions;

export const getplayerList = (props) => dispatch => {
  //  dispatch(setEventList([]))
   // dispatch(setCompetitionsList([]))
    var url = playerapi.getPlayer;
    apiCaller(url,'GET',{})
    .then((response)=>{
      if(response.data!==null && response.data){
        dispatch(setPlayerSearch(response.data))
        // dispatch(formCoutries(response.data))
        //dispatch(getCompetitionsList(params.countryId,params.competitionId,"",languageId,'','',props))
      }
    })
  }
  export const getPlayerSearchList = (params) => dispatch => {
    //  dispatch(setEventList([]))
     // dispatch(setCompetitionsList([]))
     console.log("params",params)
      // //var url = playerapi.getPlayerSearch;
       var url = `${playerapi.getPlayerSearch}param=%7B%22userName%22%3A%20%22edellabbate6%22%7D`;
      //var data ={"user_name": params.username}
      //var param;
      //var url = `${playerapi.getPlayerSearch}`'
     // https://dev.platform-ups.sportsit-tech.net/player/search?param="user_name":"palyer1"
      apiCaller(url,'GET',{})
      .then((response)=>{
        console.log("dffsfd",response)
        if(response !==null && response){
          dispatch(setPlayerSearch(response))
         // console.log("dffsfd",response.data)
          // dispatch(formCoutries(response.data))
          //dispatch(getCompetitionsList(params.countryId,params.competitionId,"",languageId,'','',props))
        }
      })
     
    }
  
  export default playerSlice.reducer;
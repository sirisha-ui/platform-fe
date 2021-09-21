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
      //  var url = `${playerapi.getPlayerSearch}param=%7B%22userName%22%3A%20%22edellabbate6%22%7D`;
       //var url = `${playerapi.getPlayerSearch}search=%7B%22userName%22%3A%22edellabbate6%22%7D`;
       var obj={
        // "accountStatus": params.accountStatus,
        // "brand": params.brand,
        // "country": params.country,
        // "currency": params.currency,
        // "dob": params.datepicker,
        // "referralCode": params.referCode,
        // "registrationDate": params.datepicker,
        // 
        "userName": params.username,
        "firstName": params.firstName,
         "lastName": params.lastName,
         "email": params.email,
         "userId": params.customerId,
         "ipaddress": params.ipAddress,
         "phone": params.phoneNumber,
      }
       var url = `${playerapi.getPlayerSearch}`;
      //var data ={"user_name": params.username}
      //var param;
      //var url = `${playerapi.getPlayerSearch}`'
     // https://dev.platform-ups.sportsit-tech.net/player/search?param="user_name":"palyer1"
      apiCaller(url,'POST',obj)
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

var endPoint="";
var updateOddsEndpoint="";


var devEndPoint = "https://dev.platform-ups.sportsit-tech.net:443/";//"http://localhost:50002/";

if(window.location.hostname.includes('platform-dev')){
	endPoint = devEndPoint;
} 
// else if(window.location.hostname.includes('testing.footylogic.com')){
// 	endPoint = testEndPoint;
// }
else if(window.location.hostname.includes('localhost')){
	endPoint =  devEndPoint;
}
else {
	endPoint = devEndPoint;
}

// export const common = {
// 	"getCountries":endPoint+"common/countries",
// 	"getCompetitions":endPoint+"common/competitions",
// 	"getEvents":endPoint+"common/events",
// 	"getSeasonslist":endPoint+"common/seasonslist",
// 	"getCategories":endPoint+"common/categories"
// } 

export const playerapi={
	"getPlayer":endPoint+"player",
     "getPlayerSearch": endPoint+"player/search",

	
}


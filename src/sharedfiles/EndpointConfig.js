
var endPoint="";
var updateOddsEndpoint="";


var devEndPoint = "https://dev.platform-ups.sportsit-tech.net:443/";//"http://localhost:50002/";


var qaEndPoint = "https://qa.hkjcstatsapi.bettorlogic.com/";


var uatEndPoint = "https://uat-hkjc.beapi.footylogic.com/"

var prodEndPoint = "https://api.footylogic.com/";

var auroraEndPoint="https://auroratesting.hkjcbeapi.footylogic.com/"

var testingv2="https://testingv2-beapi.footylogic.com/"

//var testEndPoint = "https://test.hkjcstatsapi.bettorlogic.com/"
if(window.location.hostname.includes('qa')){
	endPoint = qaEndPoint;
} 
// else if(window.location.hostname.includes('testing.footylogic.com')){
// 	endPoint = testEndPoint;
// }
else if(window.location.hostname.includes('localhost')){
	endPoint =  devEndPoint;
}
else if(window.location.hostname.includes('uat')){
	endPoint =  uatEndPoint;
}else if(window.location.hostname.includes('testingv2')){
    endPoint=testingv2;
}else if(window.location.hostname.includes('footylogic.com')){
	endPoint =  prodEndPoint;
}else if(window.location.hostname.includes('auroratesting')){
	endPoint =  auroraEndPoint;
}else {
	endPoint = qaEndPoint;
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


import { handleResponse, handleError } from "./apiUtil";
export function apiCaller(url, method, params) {
    // const dispatch = useDispatch();
    var options = {};
    options.method = method;
    var headers= {
         'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-TenantID': 'tenant1',
    }
    var query = '';
    if (params && Object.keys(params).length > 0) {
        // params.languageId = configurations.languageId;
        // params.channelId = 1;
        // if(params.regionId){
        // params.regionId = configurations.regionId;
        // }
        if (method == 'POST') {
             options.headers = headers;
            options.body = JSON.stringify(params);
        }
        else {
            query = Object.keys(params)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                .join('&');
        }
    }

    return new Promise((resolve, reject) => {
        if (method === 'POST') {
            options.headers = headers;
            console.log('headers', options.headers)
            fetch(url, options)
                .then(response => {
                    console.log('url')
                    if (response.status === 200) {
                        response.json().then(json => {
                           
                            resolve(json);
                        })
                    }
                    // if (response.status === 500) {
                    //     window.location.href =  window.location.origin+"/error"
                        
                    // }
                    // if (response.status === 404) {
                    //     window.location.href =  window.location.origin+"/error"
                        
                    // }
                })
                .catch(handleError)
        }
        else {
            console.log('url,query', url,query)
            options.headers = headers;
            console.log('urlssd',options.headers)
            fetch(url + query,options)
                .then(response => {
                    console.log('url')
                    if (response.status === 200) {
                        response.json().then(json => {
                            console.log("hh",json)
                             return resolve(json);
                        })
                    }
                    // if (response.status === 500) {
                    //     window.location.href =  window.location.origin+"/error"
                       
                    // }
                    // if (response.status === 404) {
                    //     window.location.href =  window.location.origin+"/error"
                       
                    // }
                })
                .catch(handleError)
        }
        
    });
    
   
}
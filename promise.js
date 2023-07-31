const axiosRequest = require("axios")
const { error } = require("console")
var url = "https://www.boredapi.com/api/activity"
// var res = axiosRequest.get(url)
// console.log(res)


// axiosRequest.get(url)
// .then(response=>console.log(response.data.activity))
// .catch(error=>console.log(error))

async function getActivity(){
    try{
        let response = await axiosRequest.get(url)
        console.log(response.data.activity)
    }
    catch(error){
        console.log(error)
    }

}

getActivity()
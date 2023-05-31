import React from 'react'

// const databaseData = () => {
  
//         // const endpoint = "https://eu-central-1.aws.data.mongodb-api.com/app/testapi-lskrm/endpoint/overview";
//         // const fetchData = async () => {
//         //   try{
//         //     const response = await fetch(endpoint);
//         //     const systemData = await response.json(response);
//         //     const dataLength = systemData.length; // Get the latest data
            
//         //     const latestData = systemData[(systemData.length)-1];
//         //     console.log(latestData);
            
//         //     console.log(latestData["BambooHR Data"][0]["Number of Employees"]);
    
//         //   }catch(error){
//         //     console.log(error);
//         //   } 

//         //   return latestData;
    
//         // }
          
        
//         // latestData = fetchData();

// }

export default databaseData = async () =>{
    const endpoint = "https://eu-central-1.aws.data.mongodb-api.com/app/testapi-lskrm/endpoint/overview";
    const fetchData = async () => {
      try{
        const response = await fetch(endpoint);
        const systemData = await response.json(response);
        const dataLength = systemData.length; // Get the latest data
        
        const latestData = systemData[(systemData.length)-1];
        console.log(latestData);
        
        console.log(latestData["BambooHR Data"][0]["Number of Employees"]);

      }catch(error){
        console.log(error);
      } 

    }
    return latestData;
}
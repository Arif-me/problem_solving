const makeServerRequest = new Promise((resolve, reject)=>
{

});


// total promise


const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer === true) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
    // Change this line
  }
});


//Fullfil promise

myPromise.then(result => {
  // do something with the result.
});

//example

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result =>{
  console.log(result);
});


// if got rejected

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.catch(error =>{
  console.log(error);
});

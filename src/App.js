import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import { Amplify } from "aws-amplify";
import { get } from "aws-amplify/api";
import axios from 'axios'
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const myAPI = "apiamplify"
const path = '/customers'; 

const App = () => {
  const [input, setInput] = useState("")
  const [customers, setCustomers] = useState([])


  useEffect(()=>{
    const apiData=async ()=>{
      try {
    const result =await axios.get("https://qt163r2o5i.execute-api.us-east-1.amazonaws.com/dev/connecttomysql")
    console.log("result",result?.data)
    setInput(result?.data)
      }
      catch(e){
    console.log("eeeeeeeeeeeeeeeeeeeeeee",e)
      }
    }
    apiData()
      },[])
  //Function to fetch from our backend and update customers array
  function getCustomer(e) {
    let customerId = e.input

  //   get(myAPI, path + "/" + customerId)
  //      .then(response => {
  //        console.log(response)
  //        let newCustomers = [...customers]
  //        newCustomers.push(response)
  //        setCustomers(newCustomers)

  //      })
  //      .catch(error => {
  //        console.log(error)
  //      }
  postTodo() 
  async function postTodo() {
    try {
      const restOperation = get({
        apiName: 'apiamplify',
        path: '/connecttomysql',
        options: {
          body: {
            message: 'Mow the lawn'
          }
        }
      });

      const { body } = await restOperation.response;
      const response = await body.json();
  
      console.log('POST call succeeded');
      console.log(response);
    } catch (e) {
      console.log('POST call failed: ', e);
    }
  }
   }
  

  return (
    <>{input}</>
    // <div className="App">
    //   <h1>Super Simple React App</h1>
    //   <div>
    //       <input placeholder="customer id" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>      
    //   </div>
    //   <br/>
    //   <button onClick={() => getCustomer({input})}>Get Customer From Backend</button>

    //   <h2 style={{visibility: customers.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
    //   {
    //    customers.map((thisCustomer, index) => {
    //      return (
    //     <div key={thisCustomer.customerId}>
    //       <span><b>CustomerId:</b> {thisCustomer.customerId} - <b>CustomerName</b>: {thisCustomer.customerName}</span>
    //     </div>)
    //    })
    //   }
    // </div>
  )
}

export default App;
//import React, {useState, useEffect} from 'react';
import { IUserInfo }from './InitialSubscriptionForm';
import {FormikValues} from 'formik';

/**
 * API for adding dat to an AWS DB
 * @param userInfo - email and name of subscriber
 */
export const putAPI =(userInfo: IUserInfo|FormikValues):any=>{
  //const {email, name} = props;
  //const [response, setResponse ]= useState<any>(null);
  const email = userInfo.email;
  const name = userInfo.name;

  const requestOptions = {
    "method": 'POST',
    "body": JSON.stringify({
      Email: email,
      Name: name
    })
  };
 
    fetch(" https://6wlurlsit4.execute-api.ca-central-1.amazonaws.com/Prod_iEmailSub", requestOptions)
    .then(response => response.text())
    .then(result => { console.log('Success put: ',result);return result;})
    .catch(error => { console.log('Error on put: ', error);return error;});

};
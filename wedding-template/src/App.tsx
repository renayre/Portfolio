import React from 'react';
import {ThemeProvider} from "@material-ui/core";
import './App_styles.css';
import {darkTheme} from './themes/dark-theme';
//import {Authenticator } from 'aws-amplify-react';
//import { Amplify } from 'aws-amplify';
import { AuthWrapper } from './SignIn/AuthWrapper';
//import awsconfig from './aws-exports';
//Amplify.configure(awsconfig);
//import { render } from '@testing-library/react';

class App extends React.Component{
  //classes = styles(makeStyles);
  render(){
    return(
      <ThemeProvider theme={darkTheme}>
          <AuthWrapper/>
      </ThemeProvider>
     
    );
  }
}
export default App;

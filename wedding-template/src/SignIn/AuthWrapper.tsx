import React from 'react';
import { Grid} from "@material-ui/core";
import {SignInPage} from './SignInPage';
import {InternalApp} from './InternalApp';
import { onAuthUIStateChange } from '@aws-amplify/ui-components'; //AuthState
import { makeStyles } from "@material-ui/styles";
import {AuthWrapperStyles as styles} from './styles';

export const AuthWrapper = ():JSX.Element =>{
  const classes = styles(makeStyles);
  const [authState, setAuthState] = React.useState<string>();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState) => { //authData
        setAuthState(nextAuthState);
    });
}, []);


  return(
<Grid container justify='center' alignItems='center' className={classes.root}>
  { (authState === 'SignedIn') ? 
    ( <InternalApp authState={authState} setAuthState={setAuthState}/>)
  :
    ( <SignInPage authState={authState} setAuthState={setAuthState}/>)
  }
 
 
</Grid>
  );
};

import { makeStyles, Theme } from "@material-ui/core";

export const SignInPageStyles = makeStyles((theme: Theme)=> ({
  root:{
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    maxWidth: '35%',
    minWidth: 250,
    maxHeight: '35%',
    minHeight: 200,
    borderRadius: 15,
    padding:'15px',
  },
  signInMessage:{
    textAlign:'center',
    fontSize:'1.2rem',
    fontWeight:'bold',
    margin:10,
  },
  passwordField:{
    display:'block',
    margin:10,
  },
  signInButton:{
    margin:10,
  },
  errorText:{
    color: 'red',
    fontSize:'1rem',
    margin:10,
  },
}));

export const AuthWrapperStyles = makeStyles((theme:Theme)=> ({
  root:{
    height: '100%',
    position: 'absolute',
    left: 0,
    width: '100%',
    overflow: 'hidden',
  }
}));
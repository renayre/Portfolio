import {makeStyles, Theme} from '@material-ui/core';
import {pulse} from 'react-animations';
import styled, {keyframes} from 'styled-components'
import { style, media } from 'typestyle'

export const SignUpButtonStyles = makeStyles((theme: Theme) => ({
  root:{
    //borderStyle:'solid',
  },
  signUpFullButton:{
    display:'flex',
    justifyContent:'space-between',
    borderStyle:'solid 2px',
    borderRadius: '30px',
    //opacity:.5,
  },
  signUpMessage:{
    letterSpacing:.9,
    wordSpacing:1.5,
    maxWidth: 350,
    fontSize:70,
    fontWeight: 500,
    color:'#311b92',
    marginTop:5,
    //borderStyle:'solid',
    //textShadow: '4px 4px 3px black',
    //opacity:1,
  },
}));

export const signUpMessageMobileViews = style(
  media({minWidth: 0, maxWidth: 1330}, {
    fontSize:50,
  }),
);

export const InitialSubscriptionStyles = makeStyles((theme: Theme) => ({
  root:{
    padding:20,
    backgroundColor:'#e1d9fc',
  },
  header:{
    padding:0,
    paddingLeft:10,

  },
  line:{
    border: '1px solid black',
    width:'100%',
  },
  nameField:{
    width:300,
    margin:15,
    marginBottom:0,
  },
  emailField:{
    width:300,
    margin:15,
  },
  successImg:{
    width: 140,
    height: 100,
  },
  successText:{
    color:'#1cc400',
    fontSize:'1.8rem',
    textAlign:'center',
  },
  errorText:{
    color: 'red',
    fontSize:'1rem',
  },
  submitBtn:{
    padding:5,
    float:'right',
  },
}));

export const fieldMobileViews = style(
  media({ minWidth: 0, maxWidth: 415},{
    width:'unset',
  }),  
);

export const signUpHeadingViews = style(
  media({ minWidth: 0, maxWidth: 345},{
    fontSize:10,
  }),
  media({ minWidth: 345, maxWidth: 415},{
    fontSize:13,
  }),  
);


const PulseAnimation = keyframes`${pulse}`;
export const PulseContainer = styled.div`animation: infinite 1s ${PulseAnimation};`;
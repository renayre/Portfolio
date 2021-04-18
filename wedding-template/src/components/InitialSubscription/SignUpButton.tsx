import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import {SignUpButtonStyles as styles, signUpMessageMobileViews} from './styles';
import { makeStyles } from "@material-ui/styles";
import classNames from 'classnames';


interface IProps{
  handleOnClickMessage : () =>void,
}

export const SignUpButton = (props:IProps):JSX.Element =>{
  const classes = styles(makeStyles);
  const {handleOnClickMessage} = props;

  return(
    <Grid>
       <Button className={classes.signUpFullButton} onClick={handleOnClickMessage}>
          <Typography variant="h5" className={classNames(signUpMessageMobileViews, classes.signUpMessage)}>Sign up for website updates!</Typography>
          {/*<ArrowForwardIosIcon className={classes.arrow}/>*/}
        </Button>
    </Grid>
  );
};
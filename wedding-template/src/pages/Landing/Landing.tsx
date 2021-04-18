import React from 'react';
import { Grid} from "@material-ui/core";
import classNames from 'classnames';

import {MainMessage} from './MainMessage';
import {InitialSubscription} from '../../components/InitialSubscription/InitialSubscription';
import Heading from './headingOnly.png'
import { makeStyles } from "@material-ui/styles";
import { LandingPageStyles as styles } from "./styles";
import {imgMobileViews, subscriptionMobileViews, mainMobileViews, mainMessageMobileViews} from './styles';


export const LandingPage =(): JSX.Element=>{
    const classes = styles(makeStyles);
    return(
        <Grid container direction="row" justify="center" alignItems="center" className={classes.root}> 
        <Grid container justify="center" alignItems="center" className={classNames( mainMobileViews)}>
            <Grid item><img src={Heading} alt='Save The Date' className={classNames(classes.saveHeading, imgMobileViews)}/></Grid>
            <Grid item className={classNames(mainMessageMobileViews, classes.mainMessage)}><MainMessage/> </Grid> 
            <Grid item className={classNames(classes.subscription, subscriptionMobileViews)}><InitialSubscription/></Grid>
        </Grid>        
        </Grid>
    );
};
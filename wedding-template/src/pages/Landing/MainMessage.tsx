import React from 'react';
import {Typography, Grid} from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
import classNames from 'classnames';
import { MainMessageStyles as styles, supportingTextViews, head5MobileViews, head2MobileViews, head3MobileViews, head4MobileViews } from "./styles";

export const MainMessage = (): JSX.Element =>{
  const classes = styles(makeStyles);
  
/**
 * className={classes.head2}
 *  className={classes.head1}
 * className={classes.head2}
 *  className={classes.head3}
 */

  return(
    <Grid container direction="column" alignItems="center" className={classes.root}>
      {/*<Typography variant='h1' className={classes.saveTheDateHeading}>Save the date!</Typography>*/}
        <Grid item className={classNames( supportingTextViews , classes.supportingText)}>
        <Typography variant='h5' className={head5MobileViews} >For the wedding of</Typography>
        <Typography variant='h2' className={classNames(head2MobileViews, classes.head2)}>Randall & Kendra</Typography>
        <Typography variant='h3' className={head3MobileViews}>April . 01 . 2032</Typography>
        <Typography variant='h4'className={head4MobileViews}>SpaceX Colony 7, Mars
        </Typography>
        </Grid>
    </Grid>
  );
};
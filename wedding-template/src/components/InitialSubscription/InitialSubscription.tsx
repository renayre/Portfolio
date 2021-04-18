import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import {InitialSubscriptionForm} from './InitialSubscriptionForm';
import {SignUpButton} from './SignUpButton';
import {PulseContainer} from './styles';

export const InitialSubscription = ():JSX.Element=>{

  const [open, setOpen] = useState<boolean>(false);

  const handleOnClickMessage=():void =>{
    setOpen(true);
  };

  return(
    <Grid>
      <PulseContainer>
      <SignUpButton handleOnClickMessage={handleOnClickMessage}/>
      </PulseContainer>       
      <InitialSubscriptionForm open={open} setOpen={setOpen}/>
    </Grid>
  );
};
import React from 'react';
import {LandingPage} from '../pages/Landing/Landing';
import { AuthState } from '@aws-amplify/ui-components';

interface IProps{
  authState: AuthState | string | undefined;
  setAuthState: (value: React.SetStateAction<AuthState | string | undefined>) => void;
}

export const InternalApp = (props: IProps): JSX.Element => {
  //const {authState, setAuthState} = props;

  return(
    <>
      <LandingPage/>
    </>
  );
};
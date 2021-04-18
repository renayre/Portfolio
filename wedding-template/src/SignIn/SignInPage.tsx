import React, {useState} from 'react';
import { Button, Typography, Grid,} from "@material-ui/core";
import {TextField} from 'formik-material-ui'
import { AuthState } from '@aws-amplify/ui-components';
import { Formik, Form, FormikProps, FormikValues, FormikHelpers, Field  } from 'formik';
import { makeStyles } from "@material-ui/styles";
import {SignInPageStyles as styles} from './styles';
import * as bcrypt from 'bcryptjs';
import LoadingSymbol from '../css/loading/loading.gif'


type SignInForm = FormikProps<string>;

interface IProps{
  authState: AuthState | string | undefined;
  setAuthState: (value: React.SetStateAction<AuthState | string | undefined>) => void;
}

export const SignInPage = (props: IProps):JSX.Element => {
  const { setAuthState} = props; //authState
  const classes = styles(makeStyles);
  const initialValues: FormikValues ={password:''};
  //const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [submissionError, setSubmissionError] = useState<boolean>(false);

  /* Generate Salt
  //const salt = bcrypt.genSaltSync();

  // Hash Password
  //const testhash = bcrypt.hashSync('', salt);

  //console.log("TestHash: ", testhash);*/

  const handleSubmit = (values: FormikValues, helpers: FormikHelpers<FormikValues>): void => {
    const { setSubmitting} = helpers; 
    setSubmitting(true);
    try{
      const passwordEnteredByUser = values.password;
      const hash = "$2a$10$QDXq0TMMcePn4jNO8YwtRe1M/v6H8D.sT0KFDADUk4NtLuHWX6SB6";
  
      bcrypt.compare(passwordEnteredByUser, hash, function(err: any, isMatch: any) {
        if (!isMatch) {
          console.log('Passwords do not match: ',err);
          setSubmissionError(true);
        } else {
          console.log("Password matches!");
          setAuthState('SignedIn');
        }
      })
    } catch(err){
      console.log('Error with login: ',err);
      setSubmissionError(true);
    } finally{
      setSubmitting(false);
    }
  };

  return(
<Grid className={classes.root} container direction='column' justify='center' alignItems='center'>
  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
  {(signInForm: SignInForm) => {
        const { isSubmitting, dirty} = signInForm;
        return(
    <Form>
      <Grid container direction='column' justify='center' alignItems='center'>
<Typography className={classes.signInMessage}>Welcome! Please type in 'password' to enter</Typography>
      <Field name='password' type='password' className={classes.passwordField} required variant='outlined' label="Password" component={TextField}/>
      {isSubmitting ? 
      LoadingSymbol 
      : 
      <Button
        className={classes.signInButton}
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitting|| !dirty}
      >
        Sign in
      </Button>
      }
      {submissionError ? <Typography className={classes.errorText}>
                Error at submission, or wrong passward, please try again.
              </Typography> : null}
      </Grid>
      
    </Form>
  );}}
  </Formik>
</Grid>
  );
};

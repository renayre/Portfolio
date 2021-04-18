import React, {useState} from 'react';
//import TextField from '@material-ui/core/TextField';
import { Button, Grid, Typography, Dialog} from "@material-ui/core";
import {TextField} from 'formik-material-ui'
import { Formik, Form, Field, FormikProps, FormikValues, FormikHelpers } from 'formik';
import {InitialSubscriptionStyles as styles, fieldMobileViews, signUpHeadingViews} from './styles';
import { makeStyles } from "@material-ui/styles";
import CloseIcon from '@material-ui/icons/Close';
import {putAPI} from './putApi';
import SuccessCheck from './SuccessCheck.png';
import * as yup from 'yup';
import classNames from 'classnames';

type InitialSubscriptionForm = FormikProps<string>;

interface IProps{
  open: boolean,
  setOpen: (isOpen:boolean)=>void,
}

export interface IUserInfo{
  name: string,
  email: string
}

export const InitialSubscriptionForm =(props:IProps):JSX.Element=>{
    const classes = styles(makeStyles);
    const {open, setOpen} = props;
    const initialValues: FormikValues ={email:'', name:''};
    //const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [submissionError, setSubmissionError] = useState<boolean>(false);

    const handleClose = ():void=>{
      setOpen(false);
    };

   const validateForm = yup.object().shape({
    name: yup.string().max(35, 'Too long').matches(/[a-zA-Z0-9'-`]{0,35}/, 'Please only enter letters, numbers, dashes(-), or apostrophes(\')').required('Please a name'),
    email: yup.string().email("Please enter a valid email").required('Please enter an email address'),
   });
    
    const handleSubmit = async (values: FormikValues, helpers: FormikHelpers<FormikValues>): Promise<void> =>{
        const { setSubmitting, resetForm } = helpers; 
        setSubmitting(true);
        //const {name, email} = values;
        try {
          //const response =  await putAPI(values); 
          //console.log('submit response', response);  
          //setEmail(values.email);
          setName(values.name);
          console.log('User Values: ', values);         
          resetForm(initialValues);
          setFormSubmitted(true);
          //setStatus(true); //success = true
        } catch (error) {
          //setStatus(false);
          //setErrors({submit: error.message})
          setFormSubmitted(false);
          setSubmissionError(true);
          console.log('Error at submission', error);
        } finally {
          setSubmitting(false);
        }
    };

    return(
     <Dialog  open={open} onClose={handleClose} maxWidth='xs' fullWidth={true}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validateForm}>
         {(initialSubscriptionForm: InitialSubscriptionForm) => {
        const { isSubmitting, isValid, dirty} = initialSubscriptionForm; // handleReset dirty, isValid, 
        return (
          <Form className={classes.root}>
            <Grid container direction='column' justify='center' alignItems='center'>
              <Grid className={classes.header} container direction='row' justify='space-between' >
                <Typography variant="h4" className={signUpHeadingViews}>Sign up for website updates!</Typography>
                <CloseIcon onClick={handleClose}/>
              </Grid>
              <hr className={classes.line}/>
              {formSubmitted ? 
              <Grid container direction='column' justify='center' alignItems='center'>
                <img src={SuccessCheck} alt='Success Check' className={classes.successImg}/>
                <Typography className={classes.successText}>
                  Thank you for subscribing {name}
                </Typography>
                <Button
                className="closeBtn"
                //type="submit"
                variant="contained"
                color="primary"
               // disabled={isSubmitting}
               onClick={handleClose}
              >
                Close
              </Button>
              </Grid> 
                : 
                <Grid container direction='column' justify='center' alignItems='center'> 
                <Field name='name' className={classNames(fieldMobileViews, classes.nameField)} required variant='outlined' label="Name" component={TextField}/>
              <Field name='email' className={classNames(fieldMobileViews, classes.emailField)} required variant='outlined' label="example@domain.com" component={TextField}/>
              <Button
                className="submitBtn"
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting || !isValid|| !dirty}
              >
                Subscribe
              </Button>
              {submissionError ? <Typography className={classes.errorText}>
                Error at submission, please try again.
              </Typography> : null}
              </Grid>
              }
             
            </Grid>
          </Form>
        );}}
        </Formik>
     </Dialog>
    );
}
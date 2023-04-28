import React, { useState } from 'react'
import {
    Grid,
    TextField,
    Button,
    makeStyles,
    createStyles,
    Theme,
    TextareaAutosize
} from '@material-ui/core'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import EditIcon from '@mui/icons-material/Edit';
import { Paper } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formBox: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
      },
        root: {
            maxWidth: '700px',
            display: 'block',
            margin: '0 auto',
        },
        textField: {
            '& > *': {
                width: '100%',
            },
        },
        submitButton: {
            marginTop: '24px',
            align:"right"
        },
        title: { textAlign: 'center' },
        successMessage: { color: 'green' },
        errorMessage: { color: 'red' },
    })
)

interface UserForm {
    fullName: string
    email: string
    dob:string
    address:string
    phoneNo:number
    altPhoneNo:number
}


const User: React.FunctionComponent = () => {
  let mySampleData = {
    fullName: 'Lavanya D',
    email: 'lavanya@gmail.com',
    dob: '1995-07-02',
    address: 'Madurai,TN',
    phoneNo: 7402334679,
    altPhoneNo: 8605332279,
}
const [userData,setUserData]=useState(mySampleData)
const [edit,setEdit]=useState(false)
    const classes = useStyles()
  

    const createNewUser = async (data: UserForm, resetForm: Function) => {
        try {
          console.log("up data",data)
          setUserData(data)
          setEdit(false)
          toast.success("Your datas updated suceessfully");
        } catch (error:any) {
          toast.success("Something went wrong please try again");

        } 
    }

    return (
        <div className={classes.root}>
                  <ToastContainer />

            <Formik
                initialValues={userData}
                onSubmit={(values: UserForm, actions) => {
                    createNewUser(values, actions.resetForm)
                    setTimeout(() => {
                        actions.setSubmitting(false)
                    }, 500)
                }}
                validationSchema={Yup.object().shape({
                  
                    fullName: Yup.string().required('Please enter full name'),
                    email: Yup.string()
                    .email()
                    .required('Enter valid email-id'),
                    dob:Yup.date().required('please enter your DOB')
                .min('1922-01-01', 'your birthday date must be 1922-01-01 or more')
                .max('2022-01-01', 'invalid birthday date'),
                    address: Yup.string() .required(
                            'Please enter address'
                        ),
                        phoneNo: Yup.number() .required(
                          'Please enter phoneNo'
                      ),
                      altPhoneNo: Yup.number() .required(
                        'Please enter alternative phoneNo'
                    ),
                })}
            >
                {(props: FormikProps<UserForm>) => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting,
                    } = props
                    return (
                      <Paper className={classes.formBox}>

                        <Form>
                            <h1 className={classes.title}>Customer Details  { !edit&& <EditIcon  onClick={() => setEdit(true)}></EditIcon>}</h1>
                            
                          
                            <Grid
                                container
                                justify="space-around" lg
                                direction="row"  spacing={1} 
                            >
                                <Grid item xs container   spacing={3}>

                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                        name="fullName"
                                        id="fullName"
                                        label="Customer Name"
                                        value={values.fullName}
                                        type="text"
                                       
                                        error={
                                            errors.fullName && touched.fullName
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={!edit}

                                    />
                                </Grid>
                               
                                    
                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                        name="email"
                                        id="email"
                                        label="Email-id"
                                        value={values.email}
                                        type="email"
                                      
                                        error={
                                            errors.email && touched.email
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={!edit}

                                    />
                                </Grid>
                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                        name="dob"
                                        id="dob"
                                        label="Date of Birth"
                                        InputLabelProps={{ shrink: true, required: true }}
        type="date"
        defaultValue={values.dob}
        value={values.dob}
                                       
                                        error={
                                            errors.dob && touched.dob
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={!edit}

                                    />
                                </Grid>
                                </Grid>
                                <Grid item xs container  spacing={1}>

                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                     multiline
                                     rows={4}
                                        name="address"
                                        id="address"
                                        label="Address"
                                        value={values.address}
                                       
                                        error={
                                            errors.address && touched.address
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={!edit}

                                    />
                                </Grid>
                                </Grid>
                                <Grid item lg container  spacing={2}>

                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                    
                                        name="phoneNo"
                                        id="phoneNo"
                                        label="Telephone Number"
                                        value={values.phoneNo}
                                        type="text"
                                       
                                        error={
                                            errors.phoneNo && touched.phoneNo
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={!edit}

                                    />
                                </Grid>
                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                        name="altPhoneNo"
                                        id="altPhoneNo"
                                        label="Alt Telephone Number"
                                        value={values.altPhoneNo}
                                        type="text"
                                       
                                        error={
                                            errors.altPhoneNo && touched.altPhoneNo
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={!edit}
                                    />
                                </Grid>
                                </Grid>
                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.submitButton}
                                >
                                 { edit&&  <Button
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        disabled={isSubmitting}
                                    >
                                        Save
                                    </Button>}
                                    
                                </Grid>
                            </Grid>
                        </Form>
                        </Paper>
                    )
                }}
              
            </Formik>
        </div>
    )
}

export default User
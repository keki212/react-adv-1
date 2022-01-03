import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';


import '../styles/styles.css';

export const RegisterFormikPage = () => {
  

    return (
        <div>            
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    password1: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .min(2, 'Must be at least 2 characters')
                        .required('The field is required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('The field is required'),
                    password: Yup.string()
                        .min(6, 'Must be 6 characters or more')
                        .required('The field is required'),
                    password1: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('The field is required'),
                })}
            >
                {
                    ({ handleReset }) => (
                        <Form>
                <h1>Register Formik Page</h1>

                            <MyTextInput label="Name" name="name" type="text" placeholder="Enter your name" />
                            <MyTextInput label="Email" name="email" type="text" placeholder="Enter your email" />
                            <MyTextInput label="Password" name="password" type="password" placeholder="Enter your password" />
                            <MyTextInput label="Confirm Password" name="password1" type="password" placeholder="Confirm your password" />
                            <button type="submit">Register</button>
                            <button type='button' onClick={ handleReset } >Reset</button>
                        </Form>
                    )
                }
                
            </Formik>
        </div>
    )
}

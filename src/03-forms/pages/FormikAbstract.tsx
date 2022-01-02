
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {MyCheckbox, MySelect, MyTextInput} from '../components';

import '../styles/styles.css';

export const FormikAbstract = () => {

    return (
        <div>
            <h1>Formik Abstract</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('The field is required'),
                    lastName: Yup.string()
                        .max(10, 'Must be 10 characters or less')
                        .required('The field is required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('The field is required'),
                    terms: Yup.boolean()
                        .oneOf([true], 'You must accept the terms and conditions'),
                    jobType: Yup.string()
                        .notOneOf(['it-junior'], 'You must select a distint job type')
                        .required('The field is required'),
                })}
            >
                {
                    (formik) => (
                        <Form>

                            <MyTextInput 
                                label="First Name" 
                                name="firstName" 
                                type="text" 
                                placeholder="Enter your first name" 
                            />

                            <MyTextInput 
                                label="Last Name" 
                                name="lastName" 
                                type="text" 
                                placeholder="Enter your last name" 
                            />

                            <MyTextInput 
                                label="Email" 
                                name="email" 
                                type="email" 
                                placeholder="Enter your email" 
                            />
                            
                            <MySelect label="Job Type" name="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                                <option value="other">Other</option>
                            </MySelect>

                            <MyCheckbox label="Accept terms and conditions" name="terms" /> 

                            <button type='submit' >Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

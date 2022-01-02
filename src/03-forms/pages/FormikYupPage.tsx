
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

    const {handleSubmit, errors, touched, getFieldProps} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('The field is required'),
            lastName: Yup.string()
                .max(10, 'Must be 10 characters or less')
                .required('The field is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('The field is required')
        }),
    });

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>
            <form noValidate onSubmit={ handleSubmit }>
                <label htmlFor="firstName">Firs Name</label>
                <input type="text" {...getFieldProps('firstName')} autoComplete='off' />
                {
                  (touched.firstName && errors.firstName) && <span>{ errors.firstName }</span>
                }

                <label htmlFor="lastName">Last Name</label>

                <input type="text" {...getFieldProps('lastName')} autoComplete='off' />
                {
                  ( touched.lastName && errors.lastName ) &&  <span>{ errors.lastName }</span>
                }

                <label htmlFor="email">Email address</label>
                <input type="text" {...getFieldProps('email')} autoComplete='off' />
                {
                    ( touched.email && errors.email ) && <span>{ errors.email }</span>
                }
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

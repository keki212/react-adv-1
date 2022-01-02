
import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
    firstName: string,
    lastName: string,
    email: string
};

export const FormikBasicPage = () => {

    const validate = ({firstName, lastName, email}: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        if(!firstName){
            errors.firstName = 'Required';
        }else if( firstName.length >= 15){
            errors.firstName = 'Must be 15 characters or less';
        }

        if(!lastName){
            errors.lastName = 'Required';
        }else if( lastName.length >= 10){
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
          }

        return errors;
    }

    const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validate
    });

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>
            <form noValidate onSubmit={ handleSubmit }>
                <label htmlFor="firstName">Firs Name</label>
                <input 
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoComplete='off'
                />
                {
                  (touched.firstName && errors.firstName) && <span>{ errors.firstName }</span>
                }

                <label htmlFor="lastName">Last Name</label>

                <input 
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoComplete='off'
                />
                {
                  ( touched.lastName && errors.lastName ) &&  <span>{ errors.lastName }</span>
                }

                <label htmlFor="email">Email address</label>
                <input 
                    type="text"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoComplete='off'
                />
                {
                    ( touched.email && errors.email ) && <span>{ errors.email }</span>
                }
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string,
    name: string,
    type?: 'text' | 'email' | 'password' | 'checkbox' | 'radio' | 'file',
    placeholder?: string,
    [x: string]: any
};

export const MyTextInput = ({label, ...props}: Props) => {

    const [ field ] = useField(props);

    return (
        <>
            <label htmlFor={ props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} autoComplete="off" />
            <ErrorMessage name={props.name} component="span" className="custom-span-error-message" />
        </>
    )
}
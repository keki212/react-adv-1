import { FormEvent } from 'react'

import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {

    const { isValidEmail, onChange, formData, name, email, password1, password2, resetForm } = useForm({
        name:'',
        email:'',
        password1: '',
        password2: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={ handleSubmit } noValidate>
                <input 
                    type="text" 
                    placeholder="Name"
                    autoComplete="off"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className={`${ name.trim().length <=0 && 'has-error'}`}
                />
                {
                    name.trim().length <= 0 && <span>Este campo es obligatorio</span>
                }
                <input 
                    type="email" 
                    placeholder="Email"
                    autoComplete="off"
                    name='email'
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {
                    !isValidEmail(email) && <span>Email no válido</span>
                }
                <input 
                    type="password" 
                    placeholder="Password"
                    autoComplete="off"
                    name='password1'
                    value={password1}
                    onChange={onChange}
                />
                {
                    password1.trim().length <= 0 && <span>La contraseña es requerida</span>
                }
                {
                    (password1.trim().length < 6 && password1.trim().length > 0 ) && <span>La contraseña es requerida</span>
                }
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    autoComplete="off"
                    name='password2'
                    value={password2}
                    onChange={onChange}
                />
                {
                    password2.trim().length <= 0 && <span>Este campo es necesario</span>
                }
                {
                    (password2.trim().length > 0 && password1 !== password2 ) && <span>Las contraseñas no coinciden</span>
                }
                <button type="submit">Register</button>
                <button type='button' onClick={ resetForm } >Reset</button>
            </form>
        </div>
    )
}

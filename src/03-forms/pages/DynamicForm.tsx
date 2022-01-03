import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { MySelect, MyTextInput } from '../components';

import formJson from '../data/custom-form.json';


const initialValues: {[x: string]: any } = {};

const requiredFields: {[x: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if( !input.validations ) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if( rule.type === 'required' ) {
            schema = schema.required(rule.message);
        }

        if(rule.type === 'minLength'){            
            schema = schema.min((rule as any).length, rule.message);
        }

        if(rule.type === 'maxLength'){
            schema = schema.max((rule as any).length, rule.message);
        }

        if(rule.type === 'email'){
            schema = schema.email(rule.message);
        }
    }

    requiredFields[input.name] = schema;
}


const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form noValidate>
                        {formJson.map(({label, name, placeholder, type, options}) => {
                            if(type === 'input' || type === 'email' || type === 'password') {
                                return <MyTextInput key={name} name={name} label= {label} type={(type as any)} placeholder={placeholder} />
                            }else if( type === 'select') {
                                return (
                                <MySelect key={name} name={name} label={label}>
                                    <option value= "" >Select one game</option>
                                    {
                                      options?.map(({id, label}) => (
                                        <option key={id} value={id}>{label}</option>
                                        ))
                                    }
                                </MySelect>)
                            }

                            throw new Error(`Unsupported input type: ${type}`);
                        })}                        
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

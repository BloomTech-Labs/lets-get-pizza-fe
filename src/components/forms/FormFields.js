import React from 'react'
import { Form } from 'semantic-ui-react'

const FormFields = ({handleChange, errors, fields, register, isRegistrationForm}) => {
    return (
        <>
        {fields.map(field => (
            <Form.Input 
                key={field.name}
                name={field.name}
                icon={field.icon}
                type={field.type ? field.type : 'text'}
                fluid
                label={field.label}
                placeholder={field.placeholder}
                onChange={handleChange}
                error={errors[field.name] ? field.content : false}
            />
        ))}
        </>
    )
}

export default FormFields
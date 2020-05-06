import React, { useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import {useForm} from 'react-hook-form';
import { useHistory, useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import FormFields from "../forms/FormFields";
import { baseFields, verificationFields, options } from "../forms/FormInformation";

const AuthForm = ({isRegistrationForm = false, registerFields = '', loginSubmit, registerSubmit, type, diet}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {pathname} = useLocation()
  const { register, errors, setError, handleSubmit, setValue, triggerValidation } = useForm();
  const allFields = [...registerFields, ...baseFields, ...verificationFields, {name: diet.name}]

  useEffect(() => {
    // Register all input fields
    allFields.forEach(field => {
      register({name: field.name}, {required: field.hasOwnProperty('required') ? field.required : isRegistrationForm})
    })
  },[])

  const handleRegister = (data) => {
    data.password === data.verify_password ? 
    dispatch(registerSubmit(data, history)) : setError('verify_password', {type: 'noMatch'})
  }

  const handleChange = async (e, { name, value }) => {
    setValue(name, value);
    await triggerValidation({ name });
  }

  return (
    <Form 
      onSubmit={isRegistrationForm ? 
        handleSubmit(handleRegister) : 
        handleSubmit((data) => dispatch(loginSubmit(data, history)))
      }
    >
      <Form.Group widths="equal">
          <FormFields fields={baseFields} handleChange={handleChange} errors={errors}/>
        {isRegistrationForm && (
          <>
            <FormFields fields={verificationFields} errors={errors} handleChange={handleChange}/>
          </>
        )}
      </Form.Group>
      {isRegistrationForm && (
        <>
          <FormFields fields={registerFields} errors={errors} handleChange={handleChange}/>
          <Form.Dropdown
            name={diet.name} 
            label={diet.label} placeholder="Select Dietary Options"
            multiple selection options={options} onChange={handleChange}
            error={errors.dietary_preference ? {content: 'Please select an option'} : false}
          />
        </>
      )}
      <Form.Group>
        <Button color='blue' type="submit">Submit</Button>
        {pathname.includes('users') ? 
        <Link to={`/locations/${type}`}>Business {type}</Link> : 
        <Link to={`/users/${type}`}>User {type}</Link>
        }
      </Form.Group>
    </Form>
  );
}

export default AuthForm

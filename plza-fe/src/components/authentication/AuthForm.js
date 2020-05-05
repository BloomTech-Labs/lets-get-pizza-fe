import React, { useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import {useForm} from 'react-hook-form';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../../redux/actions/userActions";
import FormFields from "../forms/FormFields";
import { registerFields, baseFields, verificationFields, options } from "../forms/FormInformation";

// Combine all input field information
const allFields = [...registerFields, ...baseFields, ...verificationFields, {name: 'dietary_preference'}]

const AuthForm = ({isRegistrationForm = false}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { register, errors, setError, handleSubmit, setValue, triggerValidation } = useForm();

  useEffect(() => {
    // Register all input fields
    allFields.forEach(field => {
      register({name: field.name}, {required: field.hasOwnProperty('required') ? field.required : isRegistrationForm})
    })
  },[])

  const registerSubmit = (data) => {
    data.password === data.verify_password ? 
    dispatch(userRegister(data, history)) : setError('verify_password', {type: 'noMatch'})
  }

  const handleChange = async (e, { name, value }) => {
    setValue(name, value);
    await triggerValidation({ name });
  }

  return (
    <Form 
      onSubmit={isRegistrationForm ? 
        handleSubmit(registerSubmit) : 
        handleSubmit((data) => dispatch(userLogin(data, history)))
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
            name="dietary_preference" 
            label="Dietary Preferences" placeholder="Select Dietary Preferences"
            multiple selection options={options} onChange={handleChange}
            error={errors.dietary_preference ? {content: 'Please select an option'} : false}
          />
        </>
      )}
      <Button color='blue' type="submit">Submit</Button>
    </Form>
  );
}

export default AuthForm

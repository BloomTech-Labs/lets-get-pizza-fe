import React, { useEffect } from "react";
import { Form, Button, Header } from "semantic-ui-react";
import { useForm } from 'react-hook-form';
import { useLocation, Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import FormFields from "../forms/FormFields";
import { baseFields, verificationFields, options } from "../forms/FormInformation";

const AuthForm = ({ isRegistrationForm = false,registerFields = '',id,loginSubmit,registerSubmit,type,diet,error,isClaim }) => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const history = useHistory()
  const { register, errors, setError, handleSubmit, setValue, triggerValidation } = useForm();
  const allFields = [...registerFields, ...baseFields, ...verificationFields, { name: diet.name, required: false }]

  useEffect(() => {
    // Register all input fields
    allFields.forEach(field => {
      register({ name: field.name }, { required: field.hasOwnProperty('required') ? field.required : isRegistrationForm })
    })
  }, [])

  const handleRegister = (data) => {
    data.password === data.verify_password ?
      dispatch(registerSubmit(data, id)) : setError('verify_password', { type: 'noMatch' })
  }

  const handleChange = async (e, { name, value }) => {
    setValue(name, value);
    await triggerValidation({ name });
  }

  return (
    <>
      <Form
        // If the form is used for registration or claiming a business
        // we will dispatch `handleRegister` action which is passed down
        // as props
        onSubmit={(isRegistrationForm || isClaim) ?
          handleSubmit(handleRegister) :
          handleSubmit((data) => dispatch(loginSubmit(data, history)))
        }
      >
        <Form.Group widths="equal">
          <FormFields fields={baseFields} handleChange={handleChange} errors={errors} />
          {(isRegistrationForm || isClaim) && (
            <>
              <FormFields fields={verificationFields} errors={errors} handleChange={handleChange} />
            </>
          )}
        </Form.Group>
        {isRegistrationForm && (
          <>
            <FormFields fields={registerFields} errors={errors} handleChange={handleChange} />
            <Form.Dropdown
              name={diet.name}
              label={diet.label} placeholder="Select Dietary Options"
              multiple selection options={options} onChange={handleChange}
              error={errors.dietary_preference ? { content: 'Please select an option' } : false}
            />
          </>
        )}
        {error !== undefined && <Header sub color='red' style={{margin: '0 0 10px'}}>{error}</Header>}
        <Button color='blue' type="submit" style={{marginBottom: '10px'}}>Submit</Button>
      </Form>
      {pathname.includes('users') ?
        <p>Business Owner |  <Link to={`/locations/${type}`} style={{textTransform: 'capitalize'}}>{type} Here</Link></p> :
        <p>Pizza Eater |  <Link to={`/users/${type}`} style={{textTransform: 'capitalize'}}>{type} Here</Link></p>
      }
    </>
  );
}

export default AuthForm

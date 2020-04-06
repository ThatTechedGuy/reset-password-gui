import React, { useState } from 'react';
import Heading from '../components/Heading/Heading.component';
import logo from './../assets/key.png';
import { Section, Division } from '../components/Container/Container.component';
import Input from '../components/Input/Input.component';
import SubmitButton from '../components/SubmitButton/Button.component';
import CancelButton from '../components/CancelButton/CancelButton.component';
import {
  PasswordSchema,
  ForgotPasswordSchema
} from '../schemas/passwordSchema';

const ForgotPasswordScreen = () => {
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');

  const [msg, setMsg] = useState(undefined);
  const [msg2, setMsg2] = useState(undefined);

  const handlePassChange = (e) => {
    setPass(e.target.value);
    setMsg(errors(e.target.value));
  };

  const handlePass2Change = (e) => {
    setPass2(e.target.value);
    setMsg2(errors(e.target.value));
  }

  const errors = (input) => {
    const {error} = PasswordSchema.validate({password: input});
    if(error !== undefined)
      return error.message;
    else  
      return undefined;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const {error, value} = ForgotPasswordSchema.validate({
      password: pass,
      password2: pass2
    });

    if(error === undefined){
      // post request
      setMsg2(undefined);
      console.log('SUCCESS:'+ value.message);
    } else {
      setMsg2('Both passwords should be same');
    }
    console.log('CLICKED!');
  };

  return (
    <Section>
      <img src={logo} alt="Key" width="150px" style={{ marginRight: 'auto' }} />
      <Heading text="Set new password" />
      <form
        className="form"
        validate={'true'}
        action="POST"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          text="New password"
          id="password"
          value={pass}
          handleChange={handlePassChange}
          error={msg !== undefined ? true: false}
          errorMessage={msg}
        />
        <Input
          text="Confirm new password"
          id="password2"
          value={pass2}
          handleChange={handlePass2Change}
          error={msg2 !== undefined ? true: false}
          errorMessage={msg2}
        />
        <Division>
          <SubmitButton text="Set new password" />
          <CancelButton text="Cancel" />
        </Division>
      </form>
    </Section>
  );
};

export default ForgotPasswordScreen;

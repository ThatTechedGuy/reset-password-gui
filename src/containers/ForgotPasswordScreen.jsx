import React from 'react';
import Heading from '../components/Heading/Heading.component';
import logo from './../assets/key.png';
import { Section, Division } from '../components/Container/Container.component';
import Input from '../components/Input/Input.component';
import SubmitButton from '../components/SubmitButton/Button.component';
import CancelButton from '../components/CancelButton/CancelButton.component';

const ForgotPasswordScreen = () => {
  return (
    <Section>
      <img src={logo} alt="Key" width="150px" style={{ marginRight: 'auto' }} />
      <Heading text="Set new password" />
      <form className="form">
        <Input text="New password" />
        <Input text="Confirm new password" />
        <Division>
          <SubmitButton text="Set new password" />
          <CancelButton text="Cancel" />
        </Division>
      </form>
    </Section>
  );
};

export default ForgotPasswordScreen;

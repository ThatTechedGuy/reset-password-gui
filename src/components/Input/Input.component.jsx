import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';
import Form from './../../components/FormControl/FormControl.component';


const Input = ({ text, id , handleChange, error, errorMessage, value}) => {
  const [values, setValues] = React.useState({
    showPassword: false
  });


  const handleClickShowPassword = () => {
    setValues({showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  return (
    <Form>
      <InputLabel htmlFor={id}>{text}</InputLabel>
      <FilledInput
        required
        id={id}
        error={error}
        type={values.showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => handleChange(e)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText error={error} id="component-helper-text">{error === true? errorMessage : ''}</FormHelperText>
    </Form>
  );
};

export default Input;

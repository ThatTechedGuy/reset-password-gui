import React from 'react';
import { makeStyles , FormControl } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '1rem',
    marginBottom: '1rem'
  }
});

const Form = (props) => {
  const classes = useStyles();
  return (
    <FormControl
      variant="filled"
      classes={{
        root: classes.root,
      }}
    >
      {props.children}
    </FormControl>
  );
};

export default Form;
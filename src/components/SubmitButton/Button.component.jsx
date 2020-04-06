import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import Form from './../../components/FormControl/FormControl.component';

const useStyles = makeStyles({
  root: {
    marginTop: '1rem',
    marginRight: 'auto',
    borderRadius: '100px',
    backgroundColor: '#773FE5',
    textTransform: 'initial'
  }
});
const SubmitButton = ({ text }) => {
  const classes = useStyles();
  return (
    <Form>
      <Button
        variant="contained"
        size="large"
        color="primary"
        classes={{
          root: classes.root
        }}
        type="submit"
      >
        {text}
      </Button>
    </Form>
  );
};

export default SubmitButton;

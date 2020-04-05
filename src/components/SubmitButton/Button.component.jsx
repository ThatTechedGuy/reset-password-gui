import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

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
    <Button
      variant="contained"
      size="large"
      color="primary"
      classes={{
          root: classes.root
      }}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;

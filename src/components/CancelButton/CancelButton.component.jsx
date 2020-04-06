import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '1rem',
  }
});

const CancelButton = ({ text, onClick }) => {
  const classes = useStyles();
  return (
    <Button
      color="primary"
      classes={{
        root: classes.root
      }}
      onClick={() => window.close()}
    >
      {text}
    </Button>
  );
};

export default CancelButton;

import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    fontWeight: 700,
    textAlign: 'left',
    marginRight:'auto'
  }
});

const Heading = ({text}) => {
  const classes = useStyles();
  return (
      <Typography
        variant="h3"
        classes={{
          root: classes.root
        }}
        gutterBottom
      >
        {text}
      </Typography>
  );
};

export default Heading;

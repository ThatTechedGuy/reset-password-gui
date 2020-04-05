import React from 'react';
import './Container.styles.css';

export const Section = (props) => {
  return <div className="section">{props.children}</div>;
};

export const Division = (props) => {
  return <div className="row">{props.children}</div>;
};

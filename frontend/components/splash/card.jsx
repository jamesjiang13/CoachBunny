import React from 'react';
import classes from './splash.module.css';

function Card(props) {
  const { sport, link } = props;

  return (
    <div className={classes.cardContainer}>
      <img src={link} alt="sport" className={classes.sportImage} />
      <h2 className={classes.sportTitle}>{sport}</h2>
    </div>
  );
}

export default Card;

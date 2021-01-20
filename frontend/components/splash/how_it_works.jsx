import React from 'react';
import { FaRunning, FaTasks, FaUsers } from 'react-icons/fa';
import classes from './splash.module.css';

function HowItWorks() {
  return (
    <section className={classes.howSectionContainer}>
      <div className={classes.howSectionTitle}>How It Works</div>
      <ul className={classes.howSectionUL}>
        <li>
          <FaTasks className={classes.howFontAwesome} />
          <h3>Pick Your Sport</h3>
          <p>Browse our available sports and tell us what you would like to work on.</p>
        </li>
        <li>
          <FaUsers className={classes.howFontAwesome} />
          <h3>Choose your Coach</h3>
          <p>Browse trusted coaches by skills, price, and more. Select the right coach for you and schedule your training time.</p>
        </li>
        <li>
          <FaRunning className={classes.howFontAwesome} />
          <h3>Train Hard</h3>
          <p>Meet with your coach and get moving! </p>
        </li>
      </ul>
    </section>
  );
};

export default HowItWorks;

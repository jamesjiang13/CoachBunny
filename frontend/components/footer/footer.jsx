import React from 'react';
import { Link } from 'react-router-dom';
import classes from './footer.module.css';

const Footer = () => (
  <footer className={classes.footerMain}>
    <div className={classes.footerMainDiv}>
      <h2> Follow us, we're friendly: </h2>
      <Link to="https://github.com/jamesjiang13/CoachBunny">
        <img className={classes.imgResponsive} src={window.githubLogo} alt="git" />
      </Link>
      <Link to="https://www.linkedin.com/in/james-jiang-b962a245/" className={classes.lnkdLogo}>
        <img className={classes.imgResponsive} src={window.linkedinLogo} alt="lnkd" />
      </Link>
    </div>
  </footer>
);


export default Footer;

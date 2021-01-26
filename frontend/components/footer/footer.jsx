import React from 'react';
import classes from './footer.module.css';

const Footer = () => (
  <footer className={classes.footerMain}>
    <div className={classes.footerMainDiv}>
      <h4> Follow us, we&#39;re friendly: </h4>
      <a target="_blank" rel="noreferrer" href="https://github.com/jamesjiang13/CoachBunny">
        <img className={classes.imgResponsive} src={window.githubLogo} alt="git" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/james-jiang-b962a245/" className={classes.lnkdLogo}>
        <img className={classes.imgResponsive} src={window.linkedinLogo} alt="lnkd" />
      </a>
    </div>
  </footer>
);

export default Footer;

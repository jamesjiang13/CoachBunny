import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Card from './card';
import classes from './splash.module.css';

function FeaturedSports() {
  const [page, setPage] = useState(false);

  useEffect(() => {}, [page]);

  return (
    <div className={classes.featuredSportsContainer}>
      <h2>Featured Sports</h2>
      <div className={classes.sportsContainer}>
        <FaChevronLeft onClick={() => setPage(!page)} className={classes.featuredSportsNav} />
        <div className={classes.sportImagesContainer}>
          {(page
            ? (
              <ul>
                <li>
                  <Card
                    sport="Football"
                    link="https://images.unsplash.com/photo-1565369330537-78657c7ad44f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80"
                  />
                </li>
                <li>
                  <Card
                    sport="Basketball"
                    link="https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  />
                </li>
                <li>
                  <Card
                    sport="Soccer"
                    link="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                  />
                </li>
              </ul>
            )
            : (
              <ul>
                <li>
                  <Card
                    sport="Tennis"
                    link="https://images.unsplash.com/photo-1544298621-a28c00544483?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"
                  />
                </li>
                <li>
                  <Card
                    sport="Swimming"
                    link="https://images.unsplash.com/photo-1560088939-a88259febdce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80"
                  />
                </li>
                <li>
                  <Card
                    sport="Golf"
                    link="https://images.unsplash.com/photo-1568229654980-91010242b5e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
                  />
                </li>
              </ul>
            )
          )}
        </div>
        <FaChevronRight onClick={() => setPage(!page)} className={classes.featuredSportsNav} />
      </div>
    </div>
  );
}

export default FeaturedSports;

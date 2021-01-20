import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import classes from './splash.module.css';

function ViewCoaches() {
  const [page, setPage] = useState(0);

  useEffect(() => {}, [page]);

  return (
    <div>
      <FaChevronLeft onClick={() => setPage(0)} />
      {(page === 0
        ? <div>page 1</div>
        : <div>page 2</div>
      )}
      <FaChevronRight onClick={() => setPage(1)} />
    </div>
  );
}

export default ViewCoaches;

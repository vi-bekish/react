import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pagination = ({ pages, page, start, next, back }) => (
  <div className="pagination" style={{ textAlign: 'center' }}>
    {
      page > 1 && page !== 2 && (
        <div className="btn"><Link to={back} >Back </Link></div>
      )
    }
    {
      page === 2 && (
        <div className="btn"><Link to={start}> Back </Link></div>
      )
    }
    {
      pages !== page && (
        <div className="btn"><Link to={next}> Next </Link></div>
      )
    }
  </div>
);


Pagination.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number,
  start: PropTypes.string,
  next: PropTypes.string,
  back: PropTypes.string,
};

export default Pagination;

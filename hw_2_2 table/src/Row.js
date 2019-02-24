import React from 'react';
import './style.css';


const Row = ({ head, children }) => {

  return (
      <tr className={head !== false ? "thead" : ''}>{children}</tr>
    )
}

Row.defaultProps = {
  head: false,
}


export default Row;

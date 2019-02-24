import React from 'react';

const SearchInput = ({ handler, submitHandler, placeholder }) => {
  return (
    <form onSubmit={submitHandler}>
      <input placeholder={placeholder} onChange={handler} />
      <button className="btn">Пошук</button>
    </form>
  );
};

export default SearchInput;

import React, { Component } from 'react';

const Input = ({ name, label, type, placeholder, value, handler }) => (
	<label>
		<div>{label}</div>
		<input
            name={name}
			type={type}
            placeholder={placeholder}
			value={value}
			onChange={handler}  />
	</label>
);


// Input.propTypes = {
//     type: PropTypes.oneOf(['text', 'password', 'number']),
//     placeholder: PropTypes.string,
//     value: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.any,
//     ]),
//     handler: PropTypes.func
// };

export default Input


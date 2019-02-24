import React, { Component } from 'react';

export class InputFile extends Component {
	render(){
		let { label, handler, children } = this.props;
		
	  return(
		<div className="image-upload">
		  	<div>{label}</div>
			<label>
				<input type="file" onChange={handler} />
				{children}
			</label>
		</div>
	  );
	}
  }
  
  
  export default InputFile


import React, { Component } from 'react';
import './App.css';


class Button extends Component {

  buttonRef = React.createRef()
  
  handleClick = () => {
    this.buttonRef.current.classList.add('animate');
  }

  render() {

  const {children} = this.props;
    return (
      <button ref={ this.buttonRef} onClick={this.handleClick}>{children}</button>
    );
  }

}
export default Button
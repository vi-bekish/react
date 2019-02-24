import React, { Component } from 'react';
import './App.css';


class LoaderImg extends Component {

  state = {
    loaded: false
  }

  componentDidMount() {
      let preloadImage = new Image();
      preloadImage.src = this.props.srcPreload;
      preloadImage.onload = () => this.setState({loaded: true})  
  }

  render = () => {
    const { loaded } = this.state;
    const { src, srcPreload } = this.props;

    return (
      <div className="image">
        <img src={loaded === true ? src : srcPreload } />
      </div>
    )
  }

}

export default LoaderImg;
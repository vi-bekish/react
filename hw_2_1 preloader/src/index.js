import React from 'react';
import ReactDOM from 'react-dom';
import LoaderImg from './LoaderImg';

const preloader = 'https://medsave.in/images/progress_bar.gif';
const image="https://media.springernature.com/lw630/nature-cms/uploads/cms/pages/2913/top_item_image/cuttlefish-e8a66fd9700cda20a859da17e7ec5748.png";


ReactDOM.render(<LoaderImg  srcPreload={preloader} src={image} />, document.getElementById('root'));
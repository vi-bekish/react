import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SearchInput from './SearchInput';

class Header extends Component {
  state = {
    searchValue: '',
    searchSubmitted: false
  };

  componentWillReceiveProps = () =>
    this.setState({
      searchValue: '',
      searchSubmitted: false
    });

  onChangeHandler = e => {
    let val = e.target.value;
    this.setState({
      searchValue: val
    });
  };
  onRequestSearch = e => {
    e.preventDefault();
    this.setState({
      searchSubmitted: true
    });
  };

  render() {
    const { searchValue, searchSubmitted } = this.state;

    return (
      <>
        <div className="header">
          <ul>
            <li><Link to="/">Колекція фільмів</Link></li>
            <li><Link to="/favorites/page/1">Мої вподобання</Link></li>
          </ul>
          <SearchInput placeholder="Введіть назву фільму" handler={this.onChangeHandler} submitHandler={this.onRequestSearch} />
          {searchSubmitted && searchValue.length >= 1 && <Redirect to={{ pathname: '/search', search: `movie=${searchValue}` }} />}
        </div>
      </>
    );
  }
}

export default Header;


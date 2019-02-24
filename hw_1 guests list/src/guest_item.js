import React, { Component } from 'react';

class UserItem extends Component {

  state = {
    arrived: false
  }
  // Check users!
  checkUser = (e) => {
    console.log('check', e.target.checked );
    this.setState({ arrived: e.target.checked })
  }

  render = () => {

    console.log( this.state );
    const { arrived } = this.state;
    const { guest } = this.props;
    const { checkUser } = this;
    return(
      <div className={ arrived ? 'user_item arrived' : 'user_item'} >
      <div className="user-info">
        <div>Гость  { guest.name } работает в компании  { guest.company }</div>
        <div>Его контакты: <br/> { guest.phone }; <br/> { guest.address } </div>
      </div>
       
        <label>
          <span>Прибыл</span>
          <input type="checkbox" onChange={checkUser}/>
        </label>
      </div>
    )
  }
}

export default UserItem;

import React, { Component } from 'react';
import './App.css';
import data from './guests.json';
import GuestItem from './guest_item';

class GuestList extends Component{

  state = {
    users: data
  }

  filterGuest = (e) => {

    let query = e.target.value.toLowerCase();
    let filteredArray = data.filter( guest => {
      let guestName = guest.name.toLowerCase();
      if(  guestName.indexOf(query) !== -1 ){
        return guest;
      }
    });

    this.setState({
      users: filteredArray
    })
  }

  render = () => {
    const { users, value } = this.state;
    const { filterGuest } = this;

    return(
        <div className="wrap">
        <div className="heading">
          <h2> Список гостей</h2>
          <div className="search-icon"></div>
        </div>
          
          <div>
            <input type="text" onChange={filterGuest} placeholder="Username to search"/>
          </div>
          {
            users.length !== 0 ?
            (
              <div>

                {
                  users.map( (guest, key) =>
                  <GuestItem
                    key={key}
                    guest={guest}
                    nation="ukrainian"
                  /> )
                }
              </div>
            ) :
            (
              <div>Таких гостей нет</div>
            )
          }


        </div>
    );


  }

}

export default GuestList;

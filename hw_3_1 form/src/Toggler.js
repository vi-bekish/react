import React, { Component } from 'react';

export class Toggler extends Component {
  render(){
    let { children, activeTogglerName, changeStatus } = this.props;

    return(
      <div>
        {this.props.label}
        <div className="togglerContainer">
          {
            React.Children.map(
              children,
              (ChildrenItem) => {
                if(ChildrenItem.props.value === activeTogglerName){
                    return React.cloneElement(ChildrenItem, {
                      ...ChildrenItem.props,
                      active: true,
                      changeStatus: changeStatus
                    })
                } else {
                  return React.cloneElement(ChildrenItem, {
                    ...ChildrenItem.props,
                    changeStatus: changeStatus
                  })
                }
              }
            )
            }
        </div>
      </div>
    );
  }
}

export const TogglerItem = ({value, active, changeStatus}) => {
  return(
    <div className={
      active === true ?
        "togglerItem active":
        "togglerItem"
      }
      data-value={value}
      onClick={
        changeStatus !== undefined ?
          changeStatus :
          null
      }
      >
      {value}
    </div>
  );
};

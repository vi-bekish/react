import React, {Component} from 'react';
import './style.css';


const Cell = ({type, cells, background, color, children, currency, ...rest}) => {

  const style = {
    backgroundColor: background,
    color: color,
  }

  //const setClass = type === "date" ? "italic" : type === "number" || "money" ? "alignRight" : type === "text" ? "alignLeft" : "";

  const CellText = () => (
    <td colSpan={cells} className="alignLeft" style={style}>
      {children}
    </td>
    ) 
  const CellDate = () => (
    <td colSpan={cells} style={style} className="italic">
        {children}
    </td>
    )
  const CellNumber = () => (
    <td colSpan={cells} style={style} className="alignRight">
       {children}
    </td>
    )
  const CellMoney = () => (
    <td colSpan={cells} style={style} currency={currency} className="alignRight">
        {children} {currencyShow}
    </td>
    )
  
  const currencyShow = type === "money" && !currency ? console.log("Currency isn't exist!") : currency;

  if(type === "text") {
    return (<CellText {...rest} />)
  } else if (type === "date") {
    return (<CellDate {...rest} />)
  } else if (type === "number") {
    return (<CellNumber {...rest} />)
  } else if (type === "money") {
    return (<CellMoney {...rest} currency="&" />)
  } else {
    return (<div colSpan={cells} color={color} style={style}>{children}</div>)
  }
}


Cell.defaultProps = {
  type: 'text',
  cells: 1,
  background: 'transparent',
  color: 'black'
}


export default Cell;

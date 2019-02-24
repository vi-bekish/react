import React from 'react';
import './style.css';
import Row from './Row';
import Cell from './Cell';


const Table = () => {

  return (
    <table>
      <Row head="true">
        <Cell>One</Cell>
        <Cell>Two</Cell>
        <Cell>Three</Cell>
        <Cell>Four</Cell>
      </Row>
      <Row>
        <Cell type="text" background="red" color="white">Text</Cell>
        <Cell type="date" >Date</Cell>
        <Cell type="number">Number</Cell>
        <Cell type="money">Money</Cell>
      </Row>
      <Row>
        <Cell type="text" >Text</Cell>
        <Cell type="date" color="orange">01.01.01</Cell>
        <Cell type="number">1</Cell>
        <Cell type="money" color="red" currency="$">123</Cell>
      </Row>
      <Row>
        <Cell type="text" >Text</Cell>
        <Cell type="date">02.02.02</Cell>
        <Cell type="number" background="#ffffca">2</Cell>
        <Cell type="money" cells="2">123123</Cell>
      </Row>
      <Row>
        <Cell cells="1" background="#ebfefb">123</Cell>
        <Cell cells="3">456</Cell>
       
      </Row>
    </table>
  )
}




export default Table;

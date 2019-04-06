import React, { Component } from 'react';
import ReactDOM from 'react-dom'



function Square(props) {
  return (
    <button
    className="square"
    onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square


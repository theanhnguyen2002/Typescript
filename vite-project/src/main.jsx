import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";

const root = document.querySelector('#root')

// const myName = "Thế Anh";
// const myAge = 20;
// const myStatus= true;
// const myInfo = {
//   name: "Thế Anh",
//   age: 19,
//   status: true
// }

function showInfo(props) {
  return <h1>Hello {props.name}</h1>;
}

const ShowInfo = (props) => {
  return <h1>Hello {props.name}</h1>;
}

ReactDOM.render(
  <div>
    <div>{showInfo({name: "Thế Anh"})}</div>
    <ShowInfo name="Thế Anh"/>
  </div>
, root);

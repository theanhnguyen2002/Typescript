import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
import ShowInfo from './components/ShowInfo';

// const root = document.querySelector('#root')

// const myName = "Thế Anh";
// const myAge = 20;
// const myStatus= true;
// const myInfo = {
//   name: "Thế Anh",
//   age: 19,
//   status: true
// }

// function showInfo(props) {
//   return <h1>Hello {props.name}</h1>;
// }

// const ShowInfo = (props) => {
//   return <h1>Hello {props.name}</h1>;
// }

const name = "Thế Anh";
const myArr =[
  {id: 1, name: "Thế Anh"},
  {id: 2, name: "NTA" },

];

ReactDOM.render(
  <div>
    <h3> {myArr.map((item, index) => <h3>{item.name}</h3> )} </h3>
    <ShowInfo name="Thế Anh"/>
  </div>
, root);

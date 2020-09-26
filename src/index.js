import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const first = 'DARK'
const second = '13 REASONS'
const third = 'cosmos'
const fourth = 'Breaking Bad'
// <>
//   <h1>NETFLIX RECOMMANDATIONS </h1>
//   <p>HERE ARE 4 OF MY TOP  LISTED SHOWS</p>
//   <ol>
//     <li> {first} </li>
//     <li>{second}
//     </li>  <li>{third}
//     </li> <li> {fourth}</li>
//   </ol>
// </>,
var cdate=new Date();

ReactDOM.render(
  <React.Fragment>   
  <h1 contentEditable='true' > SHOUKAT</h1>
  <button>Submit</button>
  <img src='https://picsum.photos/200/300'/> 
  </React.Fragment>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currentDate = new Date();
currentDate = currentDate.getHours();
let greeting = '';
const cssStyle = { };

if(currentDate >= 1 && currentDate < 12){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}else if(currentDate >= 12 && currentDate < 19){
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange';
}else{
  greeting = 'Good Night';
  cssStyle.color = 'black';
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <div>
       <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
  </>
);
import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {console.log([1, 2, 3].map((num, index) => <h2 key={index}>{num}</h2>))}
    </div>
  );
}

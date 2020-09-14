import React from 'react';
import logo from './logo.svg';
import './App.css';
import pic from './pics/imhh.jpg'
import pic18 from './pics/18.jpg'
import pic19 from './pics/19.jpg'
import pic21 from './pics/21.jpg'
import pic22 from './pics/22.jpg'
import pic23 from './pics/23.jpg'
import pic16 from './pics/16.jpg'
import pic17 from './pics/17.jpg'
import pic20 from './pics/20.jpg'
import pic26 from './pics/26.jpg'

function App() {
  return (
    <div className="App">     
        <img src={pic} className="App-logo" alt="logo" />
        <img src={pic18} className="App-logo" alt="logo" />
        <img src={pic19} className="App-logo" alt="logo" />
        <img src={pic21} className="App-logo" alt="logo" />
        <img src={pic22} className="App-logo" alt="logo" />
        <img src={pic23} className="App-logo" alt="logo" />

        <img src={pic17} className="App-logo" alt="logo" />
        <img src={pic16} className="App-logo" alt="logo" />
        <img src={pic26} className="App-logo" alt="logo" />
        <img src={pic20} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;

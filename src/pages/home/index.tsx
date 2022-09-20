import React from 'react';
import './index.scss';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <img src={require("../../assets/images/logo.png")} alt="" />
        </div>
        <div className="header-right">
          <div className="whitepaper-wrap">
            <img src={require("../../assets/images/book.png")} alt="" />
            <span>WHITEPAPER</span>  
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;

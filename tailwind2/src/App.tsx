import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around item-center">
        <p className="m-0 text-gray-400">Tailwind CSS です</p>
            <button className="bg-gray-300 border-0 p-2 hover:bg-gray-400 hover:text-white">ボタン</button>
            </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>あああ</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

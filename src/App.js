import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Wrapper />
    </div>
  );
}

export default App;

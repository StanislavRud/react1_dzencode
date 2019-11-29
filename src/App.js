import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import Groups from "./components/Groups/Groups";
import Settings from "./components/Settings/Settings";
import Prihods from "./components/Prihod/Prihods";
import Products from "./components/Products/Products";
import Users from "./components/Users/Users";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path='/groups' component={Groups} />
                <Route path='/settings' component={Settings} />
                <Route path='/prihods' component={Prihods} />
                <Route path='/products' component={Products} />
                <Route path='/users' component={Users} />
            </div>
            <Wrapper />
        </div>
    </BrowserRouter>
  );
}

export default App;

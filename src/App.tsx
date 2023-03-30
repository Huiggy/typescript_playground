import React, { useEffect, useState } from 'react';
import './App.css';
import MainView from './component/MainView';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import UserLogin from './component/UserLogin';
import RightPanel from './component/RightPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery'
import 'bootstrap/dist/js/bootstrap';

function App() {

  return (
    <>
      <div className="container">
        <div className='sidenav'>
          <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ padding: 0 }}>
            <UserLogin />
            <ul>
              <li><Link to='/'><i className="bi bi-house-fill" /> Home</Link></li>
              <li><Link to='/product'><i className="bi bi-clock" /> My Products and Flightpaths</Link></li>
              <li><Link to='/resource'><i className="bi bi-heart" /> Resources</Link></li>
            </ul>
          </div>
        </div>
        <div className="rightpane">
          <RightPanel />
        </div>
        <div className="App">
          <MainView />
        </div>
      </div>
    </>
  );
}

export default App;

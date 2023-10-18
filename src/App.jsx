import React from 'react';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/layout/Navbar"
import Navbar from '../src/layout/Navbar';
import Home from "../src/pages/Home";
import AddUser from "./users/AddUser"
import View from './users/View';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditUser from './users/EditUser';
function App() {

  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/adduser" element={<AddUser/>}/>
            <Route exact path="/edituser/:id" element={<EditUser/>}/>
            <Route exact path="/view/:id" element={<View/>}></Route>
          </Routes>

        </Router>
      </div>
    </>
  )
};

export default App;

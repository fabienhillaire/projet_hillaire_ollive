import React, { Component } from 'react';
import logo from './css/fifa.svg';
import './css/Application.css';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { Switch, Link, Route } from "react-router-dom";

import StoreSelection from "./components/StoreSelection";
import Store from "./components/Store";

class App extends Component {

  state = {
    text:"",
  }

  render() {
    return (
      <div>

        <header className="App-header" style={{'background': this.props.store.storeValid ? "url('./fond.jpg')" : '#A569BD'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1 className = "nomStore">{this.props.store.name}</h1>
          </div>
        </header>
        <div className="content" style={{'background': this.props.store.storeValid ? '#82E0AA' : "url('./fond.jpg')"}}>
          {
            this.props.store.storeValid ?
              <Store/>
            :
              <StoreSelection/>
          }
        </div>
      </div>
    );
  }

}


const mapStateToProps = (state) => ({
  store: state.store,
});


const mapActionsToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapActionsToProps)( App );

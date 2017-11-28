import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {fetchData} from './ducks/reducer' // The function we're importing from our reducer
import {connect} from 'react-redux' // 'subscribe' to our redux store

import axios from 'axios' // axios... duh

class App extends Component {

  constructor(){
    super()

    this.state = {

    }
    this.handleDataFetch = this.handleDataFetch.bind(this)
  }

  handleDataFetch(){
    let gotData = axios.get('https://pokeapi.co/api/v2/pokemon/1').then((response) => {
      return response.data
    })
    this.props.fetchData(gotData)
  }

  render() {
    return (
      <div className="App">
      {/* On click, call our handleDataFetch method */}
        <button onClick={this.handleDataFetch} style={{marginTop: '25px', height: '40px', width: '100px'}}>Get Data</button>
      {/* If we have data back, display name of pokemon */}
        <h1>{this.props.data && this.props.data.name}</h1>
      {/* If the state on our reducer is set to loading, display this */}
        <h1>{this.props.isLoading && 'We are loading...'}</h1>
      {/* If we have data back, display image of pokemon... Remember, it's SPRITES not SPRITE... */}
        <img src={this.props.data && this.props.data.sprites.front_shiny} style={{height: '250px', width: 'auto'}}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, {fetchData})(App);

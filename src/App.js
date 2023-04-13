
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';
export default class App extends Component {
  state={
    progress:10,
  
  }
 

  apikey=process.env.react_app_news
  setProgress=(progress1)=>{
    this.setState({progress: progress1});
  }

render(){
    return (
      <div>
       
        
        <Router>
       <Navbar/>
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
    
      />
 
  <Routes>
          <Route exact path="/" element={
          <News setProgress={ this.setProgress} apiKey={this.apikey}  key="general" pagesize={12} country='in' category='general' />
          }/>
          <Route exact path="/business"element={<News setProgress={ this.setProgress} apiKey={this.apikey}  key="business" pagesize={12} country='in' category='business' />}/>
          <Route exact path="/entertainment"element={<News setProgress={ this.setProgress} apiKey={this.apikey}  key="entertainment" pagesize={12} country='in' category='entertainment' />}/>
          <Route exact path="/health"element={<News setProgress={ this.setProgress} apiKey={this.apikey}  key="health" pagesize={12} country='in' category='health' />}/>
          <Route exact path="/science"element={<News setProgress={ this.setProgress} apiKey={this.apikey}  key="science" pagesize={12} country='in' category='science' />}/>
          <Route exact path="/sports"element={<News setProgress={ this.setProgress} apiKey={this.apikey}  key="sports" pagesize={12} country='in' category='sports' />}/>
          <Route exact path="/technology"element={<News setProgress={ this.setProgress} apiKey={this.apikey}  key="technology" pagesize={12} country='in' category='technology' />}/>
  
          </Routes>
       </Router>
      </div>
    )
  }
}





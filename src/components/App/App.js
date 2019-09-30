import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Feeling1 from '../Feedback/Feeling1/Feeling1'
import Content2 from '../Feedback/Content2/Content2'
import Support3 from '../Feedback/Support3/Support3'
import Comments4 from '../Feedback/Comments4/Comments4'
import Review from '../Review/Review'



class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />  
          <Route path='/1' exact render={() => <Feeling1/>} />

          <Route path='/2' exact render={() => <Content2/>} />

          <Route exact path="/3" component={Support3} />            
          <Route exact path="/4" component={Comments4} />            
          <Route exact path="/Review" component={Review} />            

        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})
export default connect(mapStateToProps)(App);

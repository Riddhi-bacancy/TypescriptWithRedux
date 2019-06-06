import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

interface Iprops {
  age: number,
  history: number[],
  handleUp():void,
  handleDown():void

}
const App: React.FC<Iprops> = (props) => {
  const history = props.history.map(h => <li>{h}</li>)
  return (
    <div className="App">
     
        <div>Age:<span> {props.age}</span></div>
        <div>
          <button
            type="button"
            onClick={props.handleUp}>Age up</button>
          <button
            type="button"
            onClick={props.handleDown}>Age Down</button>
        </div>
        <ul>
          {history}
        </ul>
      
    </div>
  );
}
const state :any  = (state : any) => state;
const dispatch = (dispatch:any) => {
  return {
    handleUp: () => dispatch({type:'AGE_UP',payload:10}),
    handleDown: () => dispatch({type:'AGE_DOWN',payload:10})
  }
}

export default connect(state,dispatch)(App);

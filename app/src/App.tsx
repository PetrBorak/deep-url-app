import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { MERGE_URL_T0_STATE_AND_HYDRATE_URL_FROM_STATE } from 'react-redux-url-state';
import logo from './logo.svg';
import './App.css';

const mapActionsToProps = (dispatch: any) =>  ({
    mergeInitialStateToProps: () => {
        dispatch({
        type: MERGE_URL_T0_STATE_AND_HYDRATE_URL_FROM_STATE
      })
    },
    setToURL: () => {
        dispatch({
          type: 'setToURL',
          payload: 12
      })
    }
})

function App({ mergeInitialStateToProps, setToURL } : any) {
  useEffect(() => {
    mergeInitialStateToProps()
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          REACT-REDUX-URL-STATE library DEMO
        </p>
        <div
          style={{
            cursor: 'pointer'
          }}
          onClick={() => setToURL()}
          className="App-link"
        >
          Click HERE set the state managed by react-redux-url-state
        </div>
      </header>
    </div>
  );
}

export default connect(null, mapActionsToProps)(App);

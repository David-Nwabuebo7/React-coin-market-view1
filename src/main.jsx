import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from './error.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const rootReducer = (state = {}, action) => {
  // Handle state updates based on actions
  return state;
};

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
      <App />
      </Provider>
   
    </ErrorBoundary>
  
  </React.StrictMode>,
)

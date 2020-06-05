import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import AppBar from './components/AppBar';
import TasksList from './components/TasksList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <AppBar />
        <TasksList />
    </div>
    </Provider>
  );
}

export default App;

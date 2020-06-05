import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import AppBar from './components/AppBar';
import TasksList from './components/TasksList';
import TaskModal from './components/TaskModal';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <AppBar />
        <Container>
          <TaskModal />
          <TasksList />
        </Container>
    </div>
    </Provider>
  );
}

export default App;

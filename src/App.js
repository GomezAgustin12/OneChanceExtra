import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import AppRoutes from './Routes';
import 'antd/dist/antd.css';

function App() {

  console.log("Hola")

  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;

import React from "react";
import { Provider } from "react-redux";
import Routes from './config/Routes';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  );
}

export default App;

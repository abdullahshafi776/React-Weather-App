import React from "react";
import Header from "./components/Header";
import Weather from "./pages/Weather/Weather";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Weather />
      </Provider>
    </Router>
  );
}

export default App;

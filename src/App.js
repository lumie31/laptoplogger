import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";

import promiseMiddleware from "redux-promise";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import Indexpage from "./components/indexpage";
import Dashboard from "./containers/dashboard";
import Logs from "./containers/logs";
import ResetPassword from "./components/resetpassword";
import Users from "./containers/users";
import Report from "./containers/reports";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
  createStore
);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <div className="parent">
            <Header />
            <section className="Main">
              <Sidebar />
              <div className="Main__routes">
                <Route exact path="/" component={Indexpage} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/logs" component={Logs} />
                <Route exact path="/resetpassword" component={ResetPassword} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/report" component={Report} />
              </div>
            </section>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

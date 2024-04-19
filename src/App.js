import React from "react";
import ClassComponent from "./view/classComponent";
import FunctionComponent from "./view/functionComponent";
import TableEx from "./view/Table";
import { Example } from "./view/exHook";
import PromiseComp from "./view/Promise/promise";
import AsyncComp from "./view/Promise/asyncAwait";
import {Route, NavLink, Switch} from 'react-router-dom';

function App() {
  
  return (
    <div className="app">
      <div className="header">
        <h3>Menu</h3>
        <ul className="menu">
          <li>
            <NavLink to="/classComponent" activeClassName="active">
            ClassComponent
            </NavLink>
          </li>
          <li>
            <NavLink to="/functionComponent" activeClassName="active">
            FunctionComponent
            </NavLink>
          </li>
          <li>
            <NavLink to="/tableEx" activeClassName="active">
            TableEx
            </NavLink>
          </li>
          <li>
            <NavLink to="/example" activeClassName="active">
            Example
            </NavLink>
          </li>
          <li>
            <NavLink to="/promiseComp" activeClassName="active">
            PromiseComp
            </NavLink>
          </li>
          <li>
            <NavLink to="/asyncComp" activeClassName="active">
            AsyncComp
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
      <h3>Content</h3>
      <div className="content">
        <Switch>
          <Route path="/classComponent" component={ClassComponent} />
          <Route path="/functionComponent" component={FunctionComponent} />
          <Route path="/tableEx" component={TableEx} />
          <Route path="/example" component={Example} />
          <Route path="/promiseComp" component={PromiseComp} />
          <Route path="/asyncComp" component={AsyncComp} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

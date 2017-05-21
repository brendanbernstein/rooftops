import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Global/Menu.jsx';
import FilterClassTable from './components/Home/Filterable_Table.jsx'
import { Router, Route, IndexRoute, hashHistory } from "react-router";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={FilterClassTable} />
  </Router>,
  document.getElementById('app')
);
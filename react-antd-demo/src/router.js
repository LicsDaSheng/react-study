import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import HomePage from './routes/HomePage';
import UsersPage from './routes/Users';
import LoginPage from './routes/Login';
import {getCookie} from './utils/utils';
import MainLayout from './components/MainLayout/MainLayout';
import MenuManagerPage from './routes/MenuManagerPage';
const validate = function (next, replace, callback) {
  // const isLoggedIn = !!getCookie('uid')
  // if (!isLoggedIn && next.location.pathname != '/login') {
  //   replace('/login')
  // }
  // console.log('是否登录验证');
  callback()
}


export default function({ history }) {
  return (
    <Router history={history}>
    	<Route path="/login" component={LoginPage} />
	    <Route path="/" component={MainLayout} onEnter={validate}>
        <IndexRoute component={HomePage}/>
        <Route path="/users" component={UsersPage} onEnter={validate}/>
        <Route path="/menus" component={MenuManagerPage} onEnter={validate}/>
      </Route>
	    
    </Router>
  );
};

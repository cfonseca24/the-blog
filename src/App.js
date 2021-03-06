import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import HomePage  from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';



class App extends Component {
  render(){
  return (
    <Router >
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Switch>
        <Route path="/" component= {HomePage} exact/>
        <Route path="/about" component= {AboutPage} exact/>
        <Route path="/articles-list" component= {ArticleListPage} exact/>
        <Route path="/article/:name" component= {ArticlePage} exact/>
        <Route component= {NotFoundPage} exact />
        </Switch>
        </div>
    </div>
    </Router>
  );
}
}

export default App;

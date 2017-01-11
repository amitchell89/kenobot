import React, {Component} from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

// import store from '../store/reducers';


export default class Routes extends Component {
  constructor(props) {
    super(props);
  }

  // render() {
  //   return (
  //     <Provider store={store}>
  //       <Router history={browserHistory}>
  //         <Route path='/' component={AppContainer} meta={meta}>
  //           <IndexRoute component={About} meta={meta} />
  //           <Route path='/gallery(/:set)(/:image)' component={Gallery} meta={meta} />
  //           <Route path='/code' component={Code} meta={meta} />
  //           <Route path='/contact' component={Contact} meta={meta} />
  //           <Route path='/terms' component={Terms} meta={meta} />
  //           <Route path='/privacy' component={Privacy} meta={meta} />
  //           <Route path='/post' component={Post} />
  //           <Route path='*' component={NotFound} meta={meta} />
  //         </Route>
  //       </Router>
  //     </Provider>
  //   )
  // }
  render() {
    <div>
      Welcome to KeanuBot
    </div>
  }
}

import React, {Component} from 'react';
import { combineReducers, createStore } from 'redux';
import { connect } from 'react-redux';
import Header from './header'
import Footer from './footer'


function mapStateToProps(state) {
   return {
    modal: false
  };
}

class AppContainer extends Component {

  render() {

    return (
      <div>
        <div className="site_wrapper site_wrapper--main">
          <Header />
          <div className="content_wrapper">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(AppContainer);

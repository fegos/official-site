import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './style/index.less';

export default class Frame extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

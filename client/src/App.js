import React, { Component, Fragment } from 'react';
import Header from './Home/Header';
import Forms from './Forms/Forms';


export default class extends Component {
  render() {
    return <Fragment>
      <Header/>
      <Forms/>
    </Fragment>
  }
}

import React, { Component, Fragment } from 'react';
import Header from './Home/Header';
import Forms from './Forms/Forms';
import Comments from './Comments/Comments';

export default class extends Component {

  state = {
  visible: true
};

  render() {
    return <Fragment>
      <Header/>
      <Forms/>
      <Comments/>
    </Fragment>
  }
}

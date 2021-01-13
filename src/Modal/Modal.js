import { Component } from 'react';

import './modal.css';

export default class Modal extends Component {
  state = {};

  render() {
    return (
      <div className="wrapper-modal">
        <div className="box-modal">{this.props.children}</div>
      </div>
    );
  }
}

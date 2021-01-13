import { Component } from 'react';
import data from '../data/tabs.json';

import './style.css';

export default class Tabs extends Component {
  state = {
    activInx: 0,
  };
  toggleTab = (index) => (e) => {
    this.setState({
      activInx: index,
    });
  };

  shouldComponentUpdate(prevProps, prevState) {
    console.log('prevState', prevState);
    console.log('state', this.state);
    return prevState.activInx !== this.state.activInx;
  }

  render() {
    console.log('re-render', Date.now());
    return (
      <>
        <ul className="d-flex">
          {data.map((item, index) => (
            <li
              key={item.title}
              className="tab-title"
              onClick={this.toggleTab(index)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <p>{data[this.state.activInx].text}</p>
      </>
    );
  }
}

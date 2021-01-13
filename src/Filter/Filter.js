import { Component } from 'react';
export default class Filter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onFilter}
        />
      </div>
    );
  }
}

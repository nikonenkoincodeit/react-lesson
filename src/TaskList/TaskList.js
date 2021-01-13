import { Component } from 'react';

class TaskList extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps ', prevProps);
    console.log('this.props ', this.props);
  }

  render() {
    let arr = this.props.tasks.map(({ id, text, completed }) => (
      <li key={id}>
        <p>{text}</p>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={this.props.handleInputCheckbox(id)}
          />
        </label>
        <button onClick={this.props.onDeleteTask(id)}>delete</button>
      </li>
    ));

    return <ul>{arr}</ul>;
  }
}

export default TaskList;

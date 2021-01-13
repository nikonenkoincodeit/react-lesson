import { Component } from 'react';

class TaskEditor extends Component {
  state = {
    text: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onAddTask } = this.props;
    onAddTask(this.state.text);
    this.setState({ text: '' });
  };

  handleVariable = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInput1">Text</label>
          <input
            type="text"
            id="exampleInput1"
            className="form-control"
            name="text"
            value={this.state.text}
            onChange={this.handleVariable}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default TaskEditor;

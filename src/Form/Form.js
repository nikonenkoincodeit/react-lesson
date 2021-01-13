import { Component } from 'react';

export default class Form extends Component {
  state = {
    email: '',
    password: '',
    checkboxCheck: false,
    subscription: null,
    age: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(555555555555);
  };

  handleAge = (e) => {
    const { value } = e.target;
    this.setState({ age: value });
  };

  handlerChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerChangeCheckbox = (e) => {
    const { name, checked } = e.target;
    this.setState({ [name]: checked });
  };
  onRadio = (e) => {
    this.setState({ subscription: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handlerChange}
        />
        <input
          type="text"
          name="password"
          value={this.state.password}
          onChange={this.handlerChange}
        />
        <label>
          <label htmlFor="checkbox_check">Ok</label>
          <input
            type="checkbox"
            id="checkbox_check"
            name="checkboxCheck"
            checked={this.state.checkboxCheck}
            onChange={this.handlerChangeCheckbox}
          ></input>
        </label>
        <div>
          <label htmlFor="">
            FREE
            <input
              type="radio"
              checked={this.state.subscription === 'FREE'}
              value="FREE"
              onChange={this.onRadio}
            />
          </label>
          <label htmlFor="">
            PRO
            <input
              type="radio"
              checked={this.state.subscription === 'PRO'}
              value="PRO"
              onChange={this.onRadio}
            />
          </label>
          <label htmlFor="">
            PREMIUM
            <input
              type="radio"
              value="PREMIUM"
              checked={this.state.subscription === 'PREMIUM'}
              onChange={this.onRadio}
            />
          </label>
        </div>
        <div>
          <select onChange={this.handleAge} value={this.state.age}>
            <option value="" disabled>
              ...
            </option>
            <option value="18">18</option>
            <option value="20">20</option>
            <option value="22">22</option>
          </select>
        </div>
        <button type="submit" disabled={!this.state.checkboxCheck}>
          submit
        </button>
      </form>
    );
  }
}

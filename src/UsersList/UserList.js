import { PureComponent } from "react";
import {all} from '../api'

import User from '../User'

export default class UserList extends PureComponent {
  state = {
    loaded: false,
    users: [],
    selectedId: null,
  };

  componentDidMount() {
    all().then((res) => {
      this.setState({
        loaded: true,
        users: res,
      });
      console.log(this.state.users);
    });
  }

  getIdUser = (id) => (event) => {
      this.setState({ selectedId: id });
  }

  render() {
    if (!this.state.loaded) {
      return <h3>loaded...</h3>;
    }

    let userList = this.state.users.map((user) => {
        let classes =
          this.state.selectedId === user.id
            ? 'list-group-item text-success'
            : 'list-group-item';
       
        return (
            <li key={user.id} className={classes} onClick={this.getIdUser(user.id)}>
            {user.name}
            </li>
        );
    });
    let userInfo =
      this.state.selectedId === null ? (
        <div className="alert alert-warning">Please, selected user</div>
      ) : (
        <User id={this.state.selectedId} />
      );
    return (
      <>
        <div>
          <ul className="list-grup">{userList}</ul>
          <hr />
          <div>{userInfo}</div>
        </div>
      </>
    );
  }
}
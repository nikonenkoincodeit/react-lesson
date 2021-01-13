import { useState, useEffect } from 'react';
import { all } from '../api';

import User from '../UserFun';

export default function UsersListFun () {

    let [users, setUsers] = useState({ loaded: false, users: null });

    useEffect(() => {
        all().then((res) => {
            setUsers({
                loaded: true,
                users: res,
            });
        });
    }, []);

    let [selectedId, setId ] = useState(null);

    let getIdUser = (id) => (e) => {
        setId(id)
    }

    if (!users.loaded) {
          return <h3>loaded...</h3>;
    }

    let userList = users.users.map((user) => {
      let classes =
        selectedId === user.id
          ? 'list-group-item text-success'
          : 'list-group-item';

      return (
        <li key={user.id} className={classes} onClick={getIdUser(user.id)}>
          {user.name}
        </li>
      );
    });
    let userInfo =
      selectedId === null ? (
        <div className="alert alert-warning">Please, selected user</div>
      ) : (
        <User id={selectedId} />
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


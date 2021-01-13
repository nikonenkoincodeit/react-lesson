import { useState, useEffect } from 'react';
import { get } from '../api';

export default function UserFun (props) {

    let [user, setUser] = useState({ loaded: true, info: null });
    useEffect(()=> {
          get(props.id).then((res) => {
            setUser({ loaded: false, info: res });
          });
    },[props.id])

    if (user.loaded) {
      return <div>Loaded...</div>;
    }
    return (
      <table className="table table-borderd">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.info.name}</td>
          </tr>
          <tr>
            <td>About</td>
            <td>{user.info.description}</td>
          </tr>
        </tbody>
      </table>
    );
}

import { PureComponent } from "react";
import { get } from '../api';

export default class User extends PureComponent {
  state = {
    loaded: true,
    info: null,
  };

  componentDidMount() {
    get(this.props.id).then((res) => {
      this.setState({ loaded: false, info: res });
      console.log(this.state.info.name);
    });
  }
  componentDidUpdate(prevProps) {
    
    if (prevProps.id === this.props.id) return
      console.log('update');
      get(this.props.id).then((res) => {
        this.setState({ loaded: false, info: res });
        console.log(this.state.info.name);
      });
    
  }
  render() {
    if (this.state.loaded) {
      return <div>Loaded...</div>;
    }
    return (
      <table className="table table-borderd">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{this.state.info.name}</td>
          </tr>
          <tr>
            <td>About</td>
            <td>{this.state.info.description}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
// import UserList from './UsersList';
// import UserListFun from './UserListFun';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
//import { LoremIpsum } from 'lorem-ipsum';

import Layout from './Layout';
//import Form from './Form';
//import TicTacToe from './TicTacToe';
import TaskList from './TaskList';
import TaskEditor from './TaskEditor';
import Filter from './Filter';
import Modal from './Modal';
import Tabs from './Tabs';
import Articles from './Articles';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    tasks: [],
    filter: '',
    showModal: false,
  };

  addTask = (text) => {
    let task = {
      id: uuidv4(),
      text: text,
      completed: false,
    };
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  deleteTask = (id) => (e) => {
    let list = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: list });
  };

  handleInputCheckbox = (id) => (e) => {
    const list = this.state.tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });

    this.setState({
      tasks: list,
    });
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getVisebleTasks = () => {
    const { filter, tasks } = this.state;

    return tasks.filter((task) => {
      console.log(task.text);
      return task.text.toLowerCase().includes(filter.toLowerCase());
    });
  };

  toggleModal = () => {
    const toggle = !this.showModal;
    console.log(toggle);
    this.setState({
      showModal: toggle,
    });
  };

  render() {
    const tasks = this.getVisebleTasks();

    return (
      <Layout>
        <Tabs />
        {!!tasks.length && (
          <>
            <TaskList
              tasks={tasks}
              onDeleteTask={this.deleteTask}
              handleInputCheckbox={this.handleInputCheckbox}
            />
            <Filter value={this.state.filter} onFilter={this.changeFilter} />
          </>
        )}
        <TaskEditor onAddTask={this.addTask} />
        <button type="button" onClick={this.toggleModal}>
          toggle modal
        </button>
        {this.state.showModal && (
          <Modal>
            <h3>title modal</h3>
            <button onClick={this.toggleModal}>close modal</button>
          </Modal>
        )}
        <Articles />
      </Layout>
    );
  }
}
export default App;

// function App() {
//   return (
//     <Layout>
//       <Form />
//     </Layout>
//   );
// }

// export default App;

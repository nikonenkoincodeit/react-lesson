import { Component } from 'react';
import axios from 'axios';
export default class Articles extends Component {
  state = {
    article: [],
  };

  componentDidMount() {
    axios
      .get('https://hn.algolia.com/api/v1/search?query=react')
      .then(({ data: { hits } }) => console.log(hits));
  }

  render() {
    return <div>Article</div>;
  }
}

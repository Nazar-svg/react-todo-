import React, { Component } from 'react';
import './seach-panel.css';

export default class SearchPenal extends Component {
state = {
  term: ''
};

onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
};

render() {
  return (
   <input placeholder="type to search"
     className="search-input"
     type="text" 
     value={this.state.term}
     onChange={this.onSearchChange} />
  );
 }
}


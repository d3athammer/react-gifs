import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    const { searchFunction } = this.props;
    // event.target.value will reach the value of the user's input
    searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;

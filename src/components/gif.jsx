import React, { Component } from 'react';

class Gif extends Component {

  handleClick = () => {
    const { selectGif, id } = this.props;
    if (selectGif) {
      selectGif(id);
    }
  }

  render() {
    const { id } = this.props;
    const src = `https://media.giphy.com/media/${id}/giphy.gif`
    return(
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    )
  }
};

export default Gif;

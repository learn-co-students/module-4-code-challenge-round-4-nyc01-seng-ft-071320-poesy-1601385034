import React from "react";

class Poem extends React.Component {

  state ={
    clicked: false
  }

  markRead = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={this.markRead}>{this.state.clicked ? <span> Mark as Unread </span> : <span> Mark as Read </span>}</button>
      </div>
    );
  }
}

export default Poem;


// <span> Mark as Unread </span>

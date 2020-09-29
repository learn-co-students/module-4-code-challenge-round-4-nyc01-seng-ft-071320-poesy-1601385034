import React from "react";

class Poem extends React.Component {
  
state = {
  read: false
}

  clickHandler = () => {
    console.log("clicked")
    this.setState({
      read: !this.state.read
    })

  }

  buttonRender = () => {
    if (this.state.read === true) {
      return "Mark as unread"
    } else {
      return "Mark as read"
    }
    
  }

  render() {
    // console.log(this.props.poem)
    return (
      <div>
        <h3>Title</h3>
        {this.props.poem.title}
        <p>Content</p>
        {this.props.poem.content}
        <p>
          <strong>- By Author</strong>
          {this.props.poem.author}
        </p>
    <button onClick={this.clickHandler}>{this.buttonRender()}</button>
      </div>
    );
  }
}

export default Poem;

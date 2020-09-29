import React from "react";

class Poem extends React.Component {
  
state = {
  read: false,
  fav: false
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

  favClick = () => {
    // console.log("clicked")
    
    this.setState({
      read: !this.state.read
    })
    
    this.props.fav(this.props.poem)
  }

  favRender = () => {
    if (this.state.fav === true) {
      return "Not a fan !"
    } else {
      return "Mark as Favorite"
    }
  }

  // removeButton = (event) => {
  //   this.props.remove(this.props.poem)
  // }

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
    <button onClick={this.favClick}>{this.favRender()}</button>
    {/*<button onClick={this.removeButton}>Delete Poem</button>*/}
      </div>
    );
  }
}

export default Poem;

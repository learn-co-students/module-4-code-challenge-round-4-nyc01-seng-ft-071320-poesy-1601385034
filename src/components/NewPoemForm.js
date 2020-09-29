import React from "react";

class NewPoemForm extends React.Component {

state = {
  title: "",
  content: "",
  author: ""
}

changeHandler = (event) => {
  console.log(event.target.value)
  this.setState({
    [event.target.name]: event.target.value
  })
}

submitHandler = (event) => {
  event.preventDefault()
  console.log(event)
  this.setState({
    [event.target.name]: event.target.value
  })
  this.props.form(this.state)
}

showHandler = () => {
  
  if (this.props.clicked === true) {
return (
  <form className="new-poem-form" onSubmit={this.submitHandler}>
  <input placeholder="Title" name="title" value={this.state.title} onChange={this.changeHandler}/>
  <input placeholder="Author" name="author" value={this.state.author}onChange={this.changeHandler}/>
  <textarea placeholder="Write your masterpiece here..." rows={10} name="content" value={this.state.content} onChange={this.changeHandler}/>
  <input type="submit" value="Share your masterpiece" />
</form>
)
  }

}


  render() {
    console.log(this.state)
    return (
    <>{this.showHandler()}</>
    );
  }
}

export default NewPoemForm;

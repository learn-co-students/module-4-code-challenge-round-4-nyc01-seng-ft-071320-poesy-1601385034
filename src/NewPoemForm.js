import React from "react";

class NewPoemForm extends React.Component {

  state={
    title: '',
    content: '',
    author: ''
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  submitHandler = (e) => {
    e.preventDefault()

    this.props.submitHandler(this.state)

    this.setState({
      title: '',
      content: '',
      author: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className="new-poem-form">
        <input type='text' name='title' value={this.state.title} onChange={this.changeHandler} placeholder="Title" />
        <input type='text' name='author' value={this.state.author} onChange={this.changeHandler} placeholder="Author" />
        <textarea type='text'  name='content' value={this.state.content} onChange={this.changeHandler} placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

/*

3. I can create poems and they are still there when I refresh the page.
  - post request

  - needs state to create object

  - onCahange for controlled form
   -- change handler function?√

   submit handler from props


*/

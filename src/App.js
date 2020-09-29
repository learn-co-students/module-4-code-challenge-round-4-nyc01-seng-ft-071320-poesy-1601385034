import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {


  state = {
    poemsArray: [],
    peekaboo: false
  }


  displayForm = () => {
    let form = !this.state.peekaboo

    this.setState({ peekaboo: form })

    console.log('something')
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        poemsArray: data
      })
    })
  }




  render() {

    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.displayForm}>Show/hide new poem form</button>
          {this.state.peekaboo && <NewPoemForm />}
        </div>
        <PoemsContainer poems={this.state.poemsArray}/>
      </div>
    );
  }
}


export default App;

/*When the app starts, I can see all currently created poems.
 - get request to poems√
 - setState with data√
  - list poems in PoemsContainer√
  - render poems√
*/

/*
2. I can show/hide the form to create new poems.√
 - change state with boolean
 - add click event to displayForm
*/

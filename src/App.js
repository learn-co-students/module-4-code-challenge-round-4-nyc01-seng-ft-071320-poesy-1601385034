import React from "react";
import "./App.css";
import PoemsContainer from "./containers/PoemsContainer";
import NewPoemForm from "./components/NewPoemForm";
import Favorites from "./containers/Favorites.js"

class App extends React.Component {

  state = {
    api: [],
    newArray: []
  }

componentDidMount() {
  fetch("http://localhost:6001/poems").then(resp => resp.json()).then(poemData =>
  
  this.setState({
    api: poemData,
    click: false
  })

  )
}

clickHandler = (event) => {
  // console.log("clicked")
  this.setState({
    clicked: !this.state.clicked
  })
}

favHandler = (favObj) => {
  // console.log(favObj)

  this.setState({
    newArray: [favObj,...this.state.newArray]
  })
}

formHandler = (poemObj) => {

console.log(poemObj)
let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accepts" : "application/json"
  },
  body: JSON.stringify(poemObj)
}


  fetch("http://localhost:6001/poems", options).then(resp => resp.json()).then(poemData =>

  this.setState({
    api: [poemObj, ...this.state.api]
  })
  )
}

// removeHandler = (poemObj) => {

//   console.log(poemObj)
//   let options = {
//     method: "Delete",
//     headers: {
//       "Content-Type": "application/json",
//       "Accepts" : "application/json"
//     },
//     body: JSON.stringify(poemObj)
//   }

//     fetch("http://localhost:6001/poems", options).then(resp => resp.json()).then(newData =>

//     this.setState({
//       api: newData
//     })
    // )
//   }

  render() {
    console.log(this.state.newArray)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler}>Show/hide new poem form</button>
          <NewPoemForm clicked={this.state.clicked} form={this.formHandler}/>
        </div>
        <PoemsContainer myApi={this.state.api} fav={this.favHandler}/>
        <Favorites myApi={this.state.newArray}/>
      </div>
    );
  }
}

export default App;

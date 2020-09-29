import React from "react";
import Poem from "../components/Poem";

class PoemsContainer extends React.Component {
// In poem component add a key remove with this.props.remove
  poemIterator = () => {
    return this.props.myApi.map(element => <Poem key={element.id} poem={element} fav={this.props.fav}/>)
  }

  render() {
    // console.log(this.props.myApi)
    return (
      <div className="poems-container">
        {
          this.poemIterator()
        }
      </div>
    );
  }
}

export default PoemsContainer;

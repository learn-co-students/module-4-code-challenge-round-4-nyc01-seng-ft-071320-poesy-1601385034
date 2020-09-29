import React from "react";
import Poem from "../components/Poem";

class PoemsContainer extends React.Component {

  poemIterator = () => {
    return this.props.myApi.map(element => <Poem key={element.id} poem={element} read={false} />)
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

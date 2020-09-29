import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  poems = () =>{
    return this.props.poems.map(ele => <Poem key={ele.id}  poem={ele}/>)
  }

  render() {

    return (
      <div className="poems-container">
        {
          this.poems()
        }
      </div>
    );
  }
}

export default PoemsContainer;

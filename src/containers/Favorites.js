import React from "react";
import Poem from "../components/Poem.js"

class Favorites extends React.Component{
    
    favIterator = () => {
        return this.props.myApi.map(element => <Poem key={element.id} poem={element} read={false} />)
      }

    render() {
        return (
            <div className="favorites">
            {
              this.favIterator()
            }
          </div>
        );
    }
}

export default Favorites;
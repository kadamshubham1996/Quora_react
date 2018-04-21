import React from 'react'
import Feeds from './feeds';
class Body extends React.Component{
    render(){
        return(
            <div>
              <Feeds feed={this.props.feed}/>
            </div>
        )
    }
}

export default Body;
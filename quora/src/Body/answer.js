import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Badge from 'react-bootstrap/lib/Badge'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'

export default class Answer extends React.Component{
    constructor(props){
        super(props);
        this.handleUpvoteClick=this.handleUpvoteClick.bind(this);
    }
    handleUpvoteClick(){
        alert(this.props.answer.answerId)
    }
    render(){
        let answer=this.props.answer;
        let index=this.props.index;
        return <div>
        <Jumbotron>
        {index + 1}->{answer.answerString}<br/>
        <Button bsStyle="warning" onClick={this.handleUpvoteClick}> &nbsp;&nbsp;Upvote<Badge>{answer.upvoteCount}</Badge></Button>
        <Button bsStyle="danger">&nbsp;&nbsp;Downvote<Badge>{answer.downvoteCount}</Badge></Button>
       </Jumbotron>
     </div>  
    }
}
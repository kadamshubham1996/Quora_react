import React from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import Badge from 'react-bootstrap/lib/Badge'
import Button from 'react-bootstrap/lib/Button'
import '../Body/feeds.css'
class Feeds extends React.Component {
  render() {
    var feeds = this.props.feed;
    var questions = feeds.Question;
    return (
      <div className="feeds">

        {
          questions.map((question) => {
            return <Jumbotron>
              <h3><b>{question.questionString}</b></h3>;
                   {this.getanswersforquestion(question)}
            </Jumbotron>
          })
        }


      </div>
    );
  }


  getanswersforquestion(question) {
    var answers = question.all_answers;
    return answers.map((answer, index) => {
      return <div>
         <Jumbotron>
         {index + 1}->{answer.answerString}<br/>
         <Button bsStyle="warning"> &nbsp;&nbsp;Upvote<Badge>{answer.upvoteCount}</Badge></Button>
         <Button bsStyle="danger">&nbsp;&nbsp;Downvote<Badge>{answer.downvoteCount}</Badge></Button>
        </Jumbotron>
      </div>  
    });
  }
}
export default Feeds;
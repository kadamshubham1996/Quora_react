import React from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import Badge from 'react-bootstrap/lib/Badge'
import Button from 'react-bootstrap/lib/Button'
import '../Body/feeds.css'
import Answer  from './answer'
import QAnswe from './QAnswer'
class Feeds extends React.Component {
  render() {
    var feeds = this.props.feed;
    var questions = feeds.Question;
    return (
      <div className="feeds">

        {
          questions.map((question,index) => {
            return <Jumbotron key={index}>
              <h3><b>{question.questionString}</b></h3>;
                   {this.getanswersforquestion(question)}
                   <QAnswe questionId={question.questionId}/>
            </Jumbotron>
          })
        }


      </div>
    );
  }


  getanswersforquestion(question) {
    var answers = question.all_answers;
    return answers.map((answer, index) => {
      <div>
        <Jumbotron>
      return <Answer key={index} answer={answer}/>
        </Jumbotron>
     </div>
    });
  }
}
export default Feeds;
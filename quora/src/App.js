import React from 'react';
//import logo from './logo.svg';
import './App.css'; 
import './Store/Appstore'
import Appactions from './Actions/Appaction'
import Reflux from 'reflux'

import Body from './Body/body'
import Footer from './Footer/footer'
import Header from './Header/Header'
import Loader from './Body/Loading'
import Login from './Body/login'
import Appstore from './Store/Appstore';
const listener = Reflux.ListenerMixin
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      feed:{
        Question:[],
      },
      loading:true,
      showLogin:false,
    }
   this.getLoadingData=this.getLoadingData.bind(this)
   this.onAppStoreActions=this.onAppStoreActions.bind(this)
   listener.listenTo(Appstore,this.onAppStoreActions)
  }
  onAppStoreActions(data){
    if(data.action=='showLoginPopup'){
      this.setState({showLogin:true})

    }
    if(data.action=='showCancelPopup'){
      this.setState({showLogin:false})
    }
  }
  getLoadingData(){
    var feed = {
      "Question": [
        {
          "all_answers": [
            {
              "answerId": 1,
              "answerString": "Block out an hour or two to do nothing but work through tutorial videos, and by work through, I mean trying to code the solutions, not just listening.",
              "createdDate": "03/04/18",
              "downvoteCount": 0,
              "upvoteCount": 2,
              "userId": "test1"
            },
            {
              "answerId": 2,
              "answerString": "If you just want to practice coding you can do it all by yourself. It's often misunderstood that you have to give lot of time on coding. But that's not true (neither false), you can give an hour or two for your coding skills.",
              "createdDate": "03/04/18",
              "downvoteCount": 0,
              "upvoteCount": 0,
              "userId": "test2"
            }
          ],
          "questionString": "How can I practice coding (computer programming) daily?",
          "userId": "test1"
        },
        {
          "all_answers": [
            {
              "answerId": 3,
              "answerString": "Pick up a small project, something you want to do. Don't go big. You are not Tony stark so don't try making Jarvis. I did a sudoku and then a website downloader (crawls through the site and downloads each page, simplified version of httack). In the website downloader I learnt to use AVL trees + Java I/O + Folder management + Networking. ",
              "createdDate": "03/04/18",
              "downvoteCount": 0,
              "upvoteCount": 0,
              "userId": "test2"
            },
            {
              "answerId": 4,
              "answerString": "Java has a bigger learning curve. It's a complete platform with a huge API[1] and a lot of details. As you've reduced your scenario to Android, I suppose you could organize your studies this way:",
              "createdDate": "03/04/18",
              "downvoteCount": 0,
              "upvoteCount": 0,
              "userId": "test2"
            },
            {
              "answerId": 5,
              "answerString": "This is the first step for very obvious reason. If you don\u2019t know the basics then you will never know either what to do next or what you are doing wrong. Initially, I do not expect from you to become the master of all java basic stuffs like keywords, core concepts or basic coding techniques. What really I expect from you is just to read all the text available in below links, even if it just doesn\u2019t make sense to you in the first attempt. Just keep reading it.",
              "createdDate": "03/04/18",
              "downvoteCount": 0,
              "upvoteCount": 0,
              "userId": "test1"
            }
          ],
          "questionString": "What are some tricks to learn Java quickly?",
          "userId": "test2"
        },
        {
          "all_answers": [
            {
              "answerId": 6,
              "answerString": "Hemant",
              "createdDate": "13/04/18",
              "downvoteCount": 0,
              "upvoteCount": 0,
              "userId": "test2"
            },
            {
              "answerId": 7,
              "answerString": "Kiran",
              "createdDate": "13/04/18",
              "downvoteCount": 0,
              "upvoteCount": 0,
              "userId": "test2"
            },
            {
              "answerId": 8,
              "answerString": "Vishal",
              "createdDate": "13/04/18",
              "downvoteCount": 0,
              "upvoteCount": 0,
              "userId": "test2"
            },
            {
              "answerId": 9,
              "answerString": "Rakesh",
              "createdDate": "13/04/18",
              "downvoteCount": 0,
              "upvoteCount": 0,
              "userId": "test1"
            },
            {
              "answerId": 10,
              "answerString": "Pramodini",
              "createdDate": "13/04/18",
              "downvoteCount": 0,
              "upvoteCount": 0,
              "userId": "test1"
            },
            {
              "answerId": 11,
              "answerString": "Shubham",
              "createdDate": "13/04/18",
              "downvoteCount": 0,
              "upvoteCount": 0,
              "userId": "test2"
            }
          ],
          "questionString": "Who am i?",
          "userId": "test1"
        },
        {
          "all_answers": [],
          "questionString": "Who am i?",
          "userId": "test2"
        }
      ]
    }
    this.setState({
      loading:false,
      feed:feed,
    });
  }

  componentDidMount(){
    setTimeout(this.getLoadingData,4000)
  }
  
  render() {
    return(
      <div>
        <center>
        <Login shouldShowLogin={this.state.showLogin}  />
        <Header/>
        <Loader loading={this.state.loading} />
        <Body feed={this.state.feed}/>
        </center>
      </div>
    );
  }
}

export default App;

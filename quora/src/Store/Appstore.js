import Reflux from 'reflux'
import Appaction from '../Actions/Appaction'
import Actions from '../Actions/Appaction';

const Appstore = Reflux.createStore({
    listenables:[Actions],

    onShowLoginPopup(){
       this.trigger({action:"showLoginPopup"});
    
    },
    onShowCancelPopup(){
        this.trigger({action:"showCancelPopup"});
    },
    onLogin(username,password){
        alert("username :"+username+"password"+password);
    },
    onShowRegistorPopup(username,password,fullname,mobileno,gender){
        alert("username"+username+"password"+password+"fullname"+fullname+"mobileno"+mobileno+"gender"+gender)
    }
});

export default Appstore;
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
       }
});

export default Appstore;
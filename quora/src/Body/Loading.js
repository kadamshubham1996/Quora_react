import React from 'react'
import ProgressBar from 'react-bootstrap/lib/ProgressBar'
import '../Body/loader.css'

export default class Loader extends React.Component{
    render(){
        const showloading=this.props.loading;
        if(showloading)
        {
        return(
            <div className="loader"></div>
    )}
        return null;       
    }
}
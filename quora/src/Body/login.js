import React from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import Appactions from '../Actions/Appaction'



export default class Login extends React.Component {
    constructor(){
        super();
        this.showLoginPopup=this.showLoginPopup.bind(this)
    }
     handleUserClick(){
         Appactions.showCancelPopup();
    
       }
       showLoginPopup(){
           const username=this.usernameField.value;
           const password=this.passwordField.value;
           Appactions.Login(username,password);
        
       }
    render() {
        let shouldShowDialog = this.props.shouldShowLogin;
        if (shouldShowDialog) {
            return (
                <div className="static-modal">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Please login</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Username or email</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="username"
                                    inputRef={(ref)=>{this.usernameField=ref}}
                                />
                            </FormGroup>
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>password</ControlLabel>
                                <FormControl
                                    type="password"
                                    placeholder="password"
                                    inputRef={(ref)=>{this.passwordField=ref}}
                                // onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={this.handleUserClick}>Cancel</Button>
                            <Button bsStyle="primary" onClick={this.showLoginPopup}>Login</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            );
        }
        return null;
    }

}
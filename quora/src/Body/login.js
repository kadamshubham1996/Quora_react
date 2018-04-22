import React from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import Tabs from 'react-bootstrap/lib/Tabs'
import Tab from 'react-bootstrap/lib/Tab'
import Appactions from '../Actions/Appaction'



export default class Login extends React.Component {
    constructor(){
        super();
        this.showLoginPopup=this.showLoginPopup.bind(this)
        this.showRegistorPopup=this.showRegistorPopup.bind(this)
    }
     handleUserClick(){
         Appactions.showCancelPopup();
    
       }
       showLoginPopup(){
           const username=this.usernameField.value;
           const password=this.passwordField.value;
           Appactions.Login(username,password);
        
       }
       showRegistorPopup()
        {
            const username=this.usernameField.value;
            const password=this.passwordField.value;
            const fullname=this.fullnameField.value;
            const mobileno=this.mobileField.value;
            const gender=this.genderField.value;
             Appactions.showRegistorPopup(username,password,fullname,mobileno,gender);
        } 
    render() {
        let shouldShowDialog = this.props.shouldShowLogin;
        if (shouldShowDialog) {
            return (
                <div className="static-modal">
                <Modal.Dialog>
                        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                              <Tab eventKey={1} title="Login">
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
                                                <ControlLabel>Password</ControlLabel>
                                                <FormControl
                                                    type="password"
                                                    placeholder="password"
                                                    inputRef={(ref)=>{this.passwordField=ref}}
                                                // onChange={this.handleChange}
                                                />
                                            </FormGroup>
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button bsStyle="primary" onClick={this.showLoginPopup}>Login</Button>
                                        <Button onClick={this.handleUserClick}>Cancel</Button>
                                        </Modal.Footer>
                                   
                              </Tab>
                        <Tab eventKey={2} title="Registration">
                        <Modal.Header>
                                            <Modal.Title>Registration</Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                <ControlLabel>Username or email</ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    placeholder="username or email"
                                                    inputRef={(ref)=>{this.usernameField=ref}}
                                                />
                                            </FormGroup>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                <ControlLabel>Password</ControlLabel>
                                                <FormControl
                                                    type="password"
                                                    placeholder="password"
                                                    inputRef={(ref)=>{this.passwordField=ref}}
                                                // onChange={this.handleChange}
                                                />
                                            </FormGroup>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                <ControlLabel>Full Name</ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    placeholder="full name"
                                                    inputRef={(ref)=>{this.fullnameField=ref}}
                                                />
                                            </FormGroup>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                <ControlLabel>Mobile No</ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    placeholder="mobile no"
                                                    inputRef={(ref)=>{this.mobileField=ref}}
                                                />
                                            </FormGroup>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                <ControlLabel>Gender</ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    placeholder="gender"
                                                    inputRef={(ref)=>{this.genderField=ref}}
                                                />
                                            </FormGroup>
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button bsStyle="primary" onClick={this.showRegistorPopup}>registor</Button>
                                        <Button onClick={this.handleUserClick}>Cancel</Button>
                                        </Modal.Footer>
                              </Tab> 
                        </Tabs>
                        </Modal.Dialog>
                   
                </div>
            );
        }
        return null;
    }

}
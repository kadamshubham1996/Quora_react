import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import Badge from 'react-bootstrap/lib/Badge'
import '../navbar/navbar.css'
import Appactions from '../../Actions/Appaction'
export default class MyNavbar extends React.Component {
  handleUserClick(){
    Appactions.showLoginPopup();

  }
  render() {
    return (
      <div >
        <Navbar className="Navbar">
          <Navbar.Header>
            <Navbar.Brand className="header">
              <a href="#brand" >Quora</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Home
      </NavItem>
              <NavItem eventKey={2} href="#">
                Answer
      </NavItem>
              <NavItem eventKey={2} href="#">
                Notification <Badge>42</Badge>
              </NavItem>
            </Nav>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>{'  '}
              <Button type="submit">Submit</Button>
              <Button bsStyle="primary" onClick={this.handleUserClick}>USER</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
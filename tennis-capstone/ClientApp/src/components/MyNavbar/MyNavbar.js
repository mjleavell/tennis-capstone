/* eslint-disable padded-blocks */
import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  NavLink,
  Nav,
  NavItem,
} from 'reactstrap';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="MyNavbar">
        <Navbar dark color="dark" expand="sm">
          <NavbarBrand tag={RRNavLink} to="/home">Tennis Explorer</NavbarBrand>
          <NavbarToggler onClick={e => this.toggle(e)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  to='/rankings'
                >
                  Rankings
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink
                  tag={RRNavLink}
                  to='/tournaments'
                >
                  Tournaments
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;

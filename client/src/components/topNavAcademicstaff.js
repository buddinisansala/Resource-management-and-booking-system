import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBIcon
} from "mdbreact";

//import './topnavsearchbar.css';

class TopNavLecturer extends Component {
  state = {
    collapse: false
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
        <MDBNavbarBrand href="/">
          <strong>Academicstaff</strong>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.onClick} />

        <MDBCollapse isOpen={this.state.collapse} navbar>

          <MDBNavbarNav center >
            <MDBNavItem active>
            <input type="text" name="search" placeholder="Search.."/>
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarNav>
            <MDBNavItem>
            <MDBRow>
            <a
                className="border border-light rounded mr-1 nav-link Ripple-parent"
                rel="noopener noreferrer"
                target="_blank"
            >
              <i className="far fa-bell"></i>
            </a>
            </MDBRow>
            </MDBNavItem>
          </MDBNavbarNav>
           
          <MDBNavbarNav right>
            <MDBNavItem>
            <MDBRow>
            <a
                className="border border-light rounded mr-1 nav-link Ripple-parent"
                rel="noopener noreferrer"
                target="_blank"
            >
              Logout
            </a>
              </MDBRow>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default TopNavLecturer;

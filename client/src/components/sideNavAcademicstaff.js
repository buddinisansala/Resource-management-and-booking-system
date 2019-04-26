import React from 'react';
import logo from "../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import HallSelect from "./HallSelect/HallSelect";
import Calender from "./Calender/Calender";

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush">

                <NavLink exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Dashboard 
                    </MDBListGroupItem>
                </NavLink>
                
                <NavLink to="/profile" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Time Tables
                    </MDBListGroupItem>
                </NavLink>

                <NavLink to="/HallSelect" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Hall Select
                    </MDBListGroupItem>
                </NavLink>
              
                <NavLink to="/Hallregister" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Hall Register
                    </MDBListGroupItem>
                </NavLink>
               
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;
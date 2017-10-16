import React, { Component } from "react";
import logo from "./logito.png";
import logoMax from "./logo.png";
import uno from "./uno.png";
import dos from "./dos.png";
import tres from "./tres.png";
import cuatro from "./cuatro.png";
import cinco from "./cinco.png";
import seis from "./seis.png";

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect
} from "react-router-dom";
import ReactBootstrap from 'react-bootstrap';
//import { Grid, Col, Row, InputGroup, FormControl ,Dropdown, MenuItem, Nav, NavItem, NavDropdown, Navbar, Image} from 'react-bootstrap';
import "./Home.css";

class NavbarHome extends Component{
	render() {
    
		return (
            <div>
                <header id="">
                    <div className="container-fluid row">
                        <div className="col-md-12 col-xs-12">
                            <div className="col-md-2 col-xs-2"><img src={logo} className="img-responsive"/></div>
                            <div className="col-md-8 col-xs-8"></div>
                            <div className="col-md-2 col-xs-2"><img src={logo} className="img-responsive"/></div>
                        </div>
                    </div>
                </header>
            </div>
);
}}


class TitleHome extends Component{
	render() {
		return (
      <div className="text-center">
        <h1>Fotos de daños</h1>
      </div> 
  );
} };

class Photos extends Component{
	render(){
		return(
			<div>Parte frontal:
			<div className="col-xs-12">
				<h5 className="col-xs-10 text-center">Añadir foto...</h5>
				<div className="col-xs-2">
					<NavLink to={"/Player"}className="btn"><i class="fa fa-plus-square-o" aria-hidden="true"></i></NavLink>
				</div>
			</div>
			</div>
		);
	}
}


class Home extends Component{
	render () {
		return(
			<div>
				<NavbarHome/>
        <hr/>
				<TitleHome/>
        <br/>
			<Photos/>
			</div>
		);
	};
}

export default Home;

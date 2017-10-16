import React, { Component } from "react";
import function from "./camera";
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
class Player extends Component{
	render(){
		return(
			<div>
				    <div id="container-video">

        <div class="app">

            <a href="#" id="start-camera" class="visible">Start app.</a>
            <video id="camera-stream" width="" height=""></video>
            <img id="snap"/>
            <p id="error-message"></p>

            <div class="controls">
                <a href="#" id="delete-photo" title="Delete Photo" class="disabled">
                    <i class="material-icons">del</i>
                </a>
                <a href="#" id="take-photo" title="Take Photo">
                    <i class="material-icons">cam</i>
                </a>
                <a href="#" id="download-photo" download="selfie.png" title="Save Photo" class="disabled">
                    <i class="material-icons">download</i>
                </a>
                <input id="qwe" type="file"/>
                <button id="load-photo">Load</button>
            </div>

            <div id="box">
            </div>

            <canvas></canvas>

        </div>


    </div>
			</div>
		);
	}
}
export default Player;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VARS from '../Utility/VARS';

class Header extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg fixed-top" style={{height: '64px', backgroundColor: 'white'}}>
                <div className="container">
                <a className="navbar-brand" href={`${VARS.app_url}`}>
                    <img src={require('../assets/images/kb_logo.png')} alt="katrina-bakeshop-logo" className="img-responsive brand-img" style={{width: '50px', height:"50px"}}/>
                    <span id="brand-logo-label">Katrina's Bakeshop</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link nav-item-hover" style={{color:'black'}} href={`${VARS.app_url}order`}>Order</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-item-hover" style={{color:'black'}} href={`${VARS.app_url}contact`}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-item-hover" style={{color:'black'}} href={`${VARS.app_url}order`}>Cart</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}

export default Header
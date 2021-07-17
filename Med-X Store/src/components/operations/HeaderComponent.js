import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

class HeaderComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
        <Link to='/home' className='icon' >
            Med-X
            <i class='fab fa-typo3' />
          </Link>             
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/store">
                Store
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </li>
           
          </ul>
        </div>
        <Link className="btn btn-outline-light" exact to="/orders">Orders</Link>
      </div>  
      </nav>

        )   
    }
}

export default HeaderComponent
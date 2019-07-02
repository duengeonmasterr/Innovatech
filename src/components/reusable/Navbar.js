import React, { Component } from 'react'
import {Link} from "gatsby"
import logo from '../../images/logo.png'
import {FaShoppingBasket} from 'react-icons/fa'

export default class Navbar extends Component {
    state = {
        navbarState: false,
        navbarClass:"collapse navbar-collapse",
        menus:[  {  id:1,
                    text:"Home",
                    url:'/'},
                 {  id:2,
                    text:"About Us",
                    url:'/aboutus/'},
                 {  id:3,
                    text:"Services",
                    url:'/'},
                 {  id:4,
                    text:"Contact us",
                    url:'/'}
                ]

    }
    myToggler=()=>{
        this.state.navbarState ? this.setState({
            navbarState:false,
            navbarClass:"collapse navbar-collapse  "
        }) : this.setState( 
            {navbarState:true,
            navbarClass:"collapse navbar-collapse show "})
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme text-white">
                <a href="/" className="navbar-brand ml-5">
                    <img src={logo} alt ="logo" width="40px"/>
                </a>
              <button className="navbar-toggler" type="button" onClick={this.myToggler}>
                 <span className="text-white">menu</span>
              </button>  
              
              
              <div className={this.state.navbarClass}>
                  <ul className="navbar-nav ml-auto mr-5">
                    {this.state.menus.map(menu=>{
                        return( 
                        <li key={menu.id}  className="nav-item">
                        <a href={menu.url} className="nav-link text-white">{menu.text}</a>
                        </li>
                        )})}
                   
                   
                    <li className="nav-item">
                        <a href="/" className="nav-link text-white"><FaShoppingBasket className="cart-icon"/></a>
                    </li>
                  </ul>
              </div>
            </nav>
        )
    }
}

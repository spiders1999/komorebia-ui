import React, {Component} from 'react';
import '../CSS/Header.css';
import Logo from './Logo.js';
import LoginHeader from './LoginHeader.js';
import HeaderProfile from './HeaderProfile.js';

class Header extends Component{
  componentDidMount(){
    console.log(this.props.current);
  }
  render(){
    return(
      <header>
        <HeaderProfile current={this.props.current} />
        <Logo />
        <LoginHeader />
      </header>
    )
  }
}

export default Header;

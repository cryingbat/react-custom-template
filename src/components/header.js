import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component{
    render() {
        return (
            <div>
               <Link to='/' className='navtitle'>首页</Link>
               <Link to='/me' className='navtitle'>我的</Link>
            </div>
        )
    }
}
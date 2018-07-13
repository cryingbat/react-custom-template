import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import home from '../views/home/index.js'
import news from '../views/news/index.js'
import about from '../views/about/index.js'
import me from '../views/me/index.js'
import nopage from '../components/nopage.js'

export default class RouterConfig extends Component{
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/' exact component={home}></Route>
                    <Route path='/news/:id'  component={news}></Route>
                    <Route path='/me'  component={me}></Route>
                    <Route path='/about'  component={about}></Route>
                    <Route path='/nopage'  component={nopage}></Route>
                    <Redirect to='/nopage' />
                </Switch>
            </HashRouter>
        )
    }
}
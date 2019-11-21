import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from './homePage/homePage'
import EditPage from './editPage/editPage'

class Index extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div className='header'>
                        <ul className='container header-container'>
                            <li><Link to='/'>主页</Link></li>
                            <li><Link to='/edit'>发表</Link></li>
                            {/* <li><Link to='/about'>关于</Link></li> */}
                        </ul>
                    </div>
                    <div className='container'>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/edit" component={EditPage} />
                        {/* <Route path="/about" component={Topics} /> */}

                    </div>
                </Router>
            </div>
        )
    }
}
export default Index
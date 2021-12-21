import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import '../App.css'

const link = {
    width: '100px',
    padding: '20px',
    margin: 'auto',
    background: 'black',
    color: 'white',
}

class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <NavLink
                    to='/'
                    exact
                    style={link}
                    activeStyle={{
                        background: 'green'
                    }}
                >
                    Home
                </NavLink>

                <NavLink
                    to='/search'
                    exact
                    style={link}
                    activeStyle={{
                        background: 'green'
                    }}
                >
                    Cocktails
                </NavLink>

            </div>
        )
    }
}

export default NavBar

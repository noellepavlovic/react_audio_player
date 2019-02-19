import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    
    render() {
        return (
            <div className="container-fluid header">
                <div className=" row title">
                    <img src="./img/title.png" alt="music.player" />
                    <Link to={`/`}><i className="fa fa-home fa-3x home" aria-hidden="true"></i></Link>
                </div>
            </div>
        )
    }
}

export default Header
import React, { Component } from 'react'
import'bootstrap/dist/css/bootstrap.min.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)



        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-dark bg-primary">
                    <div><a href="/" className="navbar-brand">ERP</a></div>
                    <div><a href="/about" className="navbar-brand">about</a></div>
                    <div><a href="/content" className="navbar-brand">content</a></div>
                    <div><a href="/product" className="navbar-brand">product</a></div>
                    <div><a href="/software" className="navbar-brand">software</a></div>

                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent

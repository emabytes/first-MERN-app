import React, { Component } from "react"
import { Link } from "react-router-dom"

class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/"> <i class="fas fa-dog"></i> </Link>
                    </li>
                    <li>
                        <Link to="/"> All Contacts </Link>
                    </li>
                    <li>
                        <Link to="/" class="nav-link"> Edit Contacts </Link>
                    </li>

                    <li>
                        <Link to="/new" class="nav-link"> New Contact </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
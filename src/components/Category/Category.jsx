import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import Btn from "../Btn/Btn"

import "./Category.scss"


export default class Category extends Component {
    
    render() {
        const {name, id} = this.props
        const isActive = ({isActive}) => isActive ? 'nav__item nav__item_active ' : 'nav__item'
        return (
            <NavLink className={isActive} to={`/category/${id}`}>
                <li>
                    <div className="category">
                        {name}
                    </div>
                </li>
            </NavLink>
        
        )
    }
}

import React, { Component } from 'react'
import "./WeaponItem.scss"
import { getColor } from '../../utils/getColor'
import { NavLink } from "react-router-dom"

export default class WeaponItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: false,
        }
    }

    handleMouseEnter = () => {
        this.setState({hover: true})
    }

    handleMouseLeave = () => {
        this.setState({hover: false})
    }
    

    render() {
        const { name, price, type, weight, category, id, link, caliber, wear } = this.props

        const getStyle = ({isActive}) => {
            return {
                "borderLeft": `1px solid ${getColor(category)}`,
                "transition": "background 0.3s ease",
                "color": isActive ? "#000" : this.state.hover ? "#000" : "rgba(255, 255, 255, 0.7)",
                "background": isActive ? `${getColor(category)}` : this.state.hover ? `${getColor(category)}` : "rgba(0, 0, 0, 0.5)", 
            }
        }
        
        return (
            <NavLink
            className={"weapon-item__link"}
            to={`/category/${link}/${id}`}
            style={getStyle}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            >
                <li className={`weapon-item `}> 
                    <div className="weapon-item__header">
                        <span className="weapon-item__name">
                            {name}
                        </span>
                        <span className="weapon-item__price">
                            {wear ? wear : `$ ${price}`}
                        </span>
                    </div>
                    <div className="weapon-item__footer">
                        <span className="weapon-item__type">
                            {type}
                        </span>

                        <div className="weapon-item__footer__right">
                            {caliber ? 
                            <span className="weapon-item__caliber">
                                {caliber} мм
                            </span> 
                            :null}
                            <span className="weapon-item__weight">
                                {weight} кг
                            </span>
                        </div>
                    </div>
                </li>
            </NavLink>
        )
    }
}

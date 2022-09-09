import React, { Component } from 'react'
import { getColor } from "../../utils/getColor"
import "./Scale.scss"



export default class Scale extends Component {


render() {
    const { label, value, category } = this.props

    return (
        <div className="scale__wrapper">
            <div className="scale__info">
                <div className="scale__label">
                    {label}
                </div>
                <div className="scale__value">
                    {value}
                </div>
            </div>
            <div className="scale">
                <div className={`scale__bar scale__bar`} 
                style={{
                    width: value + "%",
                    background: `${getColor(category)}`
                    }}></div>
            </div>
        </div>
    )
  }
}

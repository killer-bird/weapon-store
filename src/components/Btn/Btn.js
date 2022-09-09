import React, { Component } from 'react'
import "./Btn.scss";

export default class Btn extends Component {

    
    
    render() {
        const {children} = this.props

        return (
            <button className="btn btn_transparent">
                {children}
            </button>
        )
    }
}

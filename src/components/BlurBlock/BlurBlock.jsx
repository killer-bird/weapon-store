import React, { Component } from 'react'
import "./BlurBlock.scss"


export default class BlurBlock extends Component {

    render() {
        return (
            <div className="blur-block">
                {this.props.children}
            </div>
        )
    }
}

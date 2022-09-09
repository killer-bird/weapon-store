import React, { Component } from 'react'
import { getColor } from '../../utils/getColor'


export default class BtnToCart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }
    handleMouseEnter = () => {
        this.setState({hover: true})
    }

    handleMouseLeave = () => {
        this.setState({hover: false})
    }

    render() {
        const { category, handleClick } = this.props

        const style = {
            "background" : this.state.hover ? `${getColor(category)}` : "#000",
            "color" : "#fff",
        }


        return (
            <button style={style}
            onClick={handleClick}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            className="btn btn_to-cart">
                В корзину
            </button>
        )
    }
}


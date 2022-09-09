import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getColor } from "../../utils/getColor"
import Btn from "../Btn/Btn"
import { removeFromCart, adjustCounter } from "../../redux/cartReducer"
import "./CartItem.scss"

class CartItem extends Component {


    remove = () => {
        this.props.removeFromCart(this.props.id)
    }

    plus = () => {
        this.props.adjustCounter({id: this.props.id, counter: this.props.counter + 1})
    }
    
    minus = () => {
        if(this.props.counter - 1  === 0) {
            this.remove()
        }
        this.props.adjustCounter({id: this.props.id, counter: this.props.counter - 1})
    }


    render() {

        const { category, name, counter, price } = this.props
        const style = {
            background: getColor(category)
        }
        
        return (
            <div className="cart__inside__item">
                <div className="cart__inside__item__left">
                    <div style={style} className="cart__inside__item__type"></div>
                    <div className="cart__inside__item__name">{name}</div>
                </div>
                <div className="cart__inside__item__right">
                    <div onClick={this.minus}
                    className="cart__inside__item__minus-btn"></div>
                    <div className="cart__inside__item__counter">
                        {counter} шт
                    </div>
                    <div onClick={this.plus}
                    className="cart__inside__item__plus-btn"></div>
                    <span className="cart__inside__item__price">
                        $ {price}
                    </span>
                    <div className="cart__inside__item__remove-btn"
                    onClick={this.remove}>
                        <Btn>
                            <div className="btn_close"></div>
                        </Btn>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {removeFromCart, adjustCounter}

export default connect(
    (state) => {},
    mapDispatchToProps
)(CartItem)
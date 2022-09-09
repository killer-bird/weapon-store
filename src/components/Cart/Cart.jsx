import React, { Component } from 'react'
import { connect } from "react-redux"
import "./Cart.scss"
import Btn from "../Btn/Btn"
import CartInside from "./CartInside"
import { getTotalCount, getTotalAmount } from "../../redux/cartReducer"

class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    openCart = () => {
        this.setState({ isOpen: true })
    }

    closeCart = (e) => {
        if(e.target === e.currentTarget) {
            this.setState({ isOpen: false })
        }
    }

    render() {
        const { totalCount, totalAmount, items } = this.props
        return (
            <div className="cart__wrapper">
                <div className="cart__info">
                    <span className="cart__count">
                        {totalCount} товаров
                    </span>
                    <span className="cart__amount">
                        $ {totalAmount.toLocaleString('ru')}
                    </span>
                </div>
                <button 
                onClick={this.openCart}
                className="btn btn_transparent">
                    <div className='cart'>CART</div>
                </button>
                {
                this.state.isOpen ?
                <CartInside 
                    closeCart={this.closeCart} 
                    totalAmount={totalAmount}
                    totalCount={totalCount}
                    items={items}
                    /> :
                null
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const mapStateToProps = (state) => {

    return {
        totalCount : getTotalCount(state),
        totalAmount: getTotalAmount(state),
        items: state.cart.items
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)
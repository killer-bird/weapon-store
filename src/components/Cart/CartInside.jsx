import React, { Component } from 'react'
import "./Cart.scss"
import Btn from "../Btn/Btn"
import CartItem from "../CartItem/CartItem"


export default class CartInside extends Component {

    render() {
        const { closeCart, totalAmount, items } = this.props
        return (
            <div 
            onClick={closeCart}
            className="cart__inside__wrapper">
                <div className="cart__inside">
                    <h3 className="cart__inside__title">
                        Корзина
                    </h3>
                    <div className="cart__inside__items">
                        {items.map(item => <CartItem 
                            id={item.id}
                            price={item.price}
                            counter={item.counter}
                            name={item.name}
                            category={item.category}
                        />)}
                    </div>
                    <div className="cart__inside__footer">
                        <div className="cart__inside__amount">
                            Итого: 
                            <span className="cart__inside__amount__content">
                                $ {totalAmount.toLocaleString('ru')}
                            </span>
                        </div>
                        <div className="cart__inside__btns">
                            <Btn>
                                <div className="cart__inside__btn-close"
                                onClick={this.props.closeCart}>
                                    назад
                                </div>
                            </Btn>
                            <Btn>
                            <div className="cart__inside__btn-close"
                                onClick={this.props.closeCart}>
                                    купить
                                </div>
                            </Btn>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}


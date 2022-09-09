import React, { Component } from 'react'
import BlurBlock from "../BlurBlock/BlurBlock"
import Scale from "../Scale/Scale"
import BtnToCart from "../Btn/BtnToCart"
import { connect } from "react-redux"
import { addToCart } from '../../redux/cartReducer'



class WeaponScrenFooterForBuy extends Component {

    handleClick = () => {
        this.props.addToCart(this.props.weaponItem)
    }

    render() {
        const { weaponItem } = this.props
        return (
            <div className="weaponScreen__footer">
                        <div className="weaponScreen__footer__left">
                            <div className="weaponScreen__footer__item">
                                <BlurBlock>
                                    <div className="weaponScreen__footer__info-left">
                                        { weaponItem?.caliber ? <span>{weaponItem.caliber} мм</span> : null }
                                        { weaponItem?.clip ? <span>{weaponItem.clip} шт </span>: null }
                                        { weaponItem?.weight } кг
                                    </div>
                                </BlurBlock>
                            </div>
                            <div className="weaponScreen__footer__item">
                                <BlurBlock>
                                    <div className='weaponScreen__footer__info-right'>
                                        { weaponItem?.rateOfFire ? 
                                            <Scale label={"Скорострельность"} 
                                            value={weaponItem.rateOfFire} 
                                            category={weaponItem?.category} /> :
                                            null
                                        }
                                        { weaponItem?.accurasy ? 
                                            <Scale label={"Точность"} 
                                            value={weaponItem.accurasy} 
                                            category={weaponItem?.category} /> :
                                            null
                                        }
                                        <Scale label={"Урон"} 
                                        value={weaponItem?.damage} 
                                        category={weaponItem?.category} />
                                    </div>
                                </BlurBlock>
                            </div>
                        </div>
                        <div className="weaponScreen__footer__right">
                            <div className="weaponScreen__price">
                                <BlurBlock>
                                    {weaponItem?.price.toLocaleString('ru')} $
                                </BlurBlock>
                            </div>
                            <BtnToCart category={weaponItem?.category} handleClick={this.handleClick}/>
                        </div>
                    </div>
        )
    }
}

const mapDispatchToProps = {addToCart}

export default connect(
    (state) => ({}),
    mapDispatchToProps
)(WeaponScrenFooterForBuy)
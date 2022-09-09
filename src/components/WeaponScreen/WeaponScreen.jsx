import React, { Component } from 'react'
import Cart from "../Cart/Cart"
import { connect } from 'react-redux'
import { getWeaponItem } from "../../redux/weaponReducer"
import { getColor } from "../../utils/getColor"
import WeaponScrenFooterForBuy from "../WeaponScrenFooterForBuy/WeaponScrenFooterForBuy"
import WeaponScreenFooterForRepair from "../WeaponScreenFooterForRepair/WeaponScreenFooterForRepair"
import "./WeaponScreen.scss"

class WeaponScreen extends Component {

    render() {
        const { id, weaponItem } = this.props
        console.log(weaponItem)
        const style = {
            background: getColor(weaponItem?.category)
        }
        
        if(!id) {
            return (
                <div className="weaponScreen">
                    <div className="weaponScreen__header">
                        <div className="weaponScreen__title">
                            <h2 className="weaponScreen__name">Выберите товар</h2>
                        </div> 
                        <Cart />
                    </div>
                </div>
            )
        }
        
        
        return (
            <div className="weaponScreen">
                <div className="weaponScreen__header">
                    <div className="weaponScreen__title">
                        <h2 className="weaponScreen__name">{weaponItem?.name}</h2>
                        <div className="weaponScreen__type">
                            <div style={style} className="weaponScreen__type__color" ></div>
                            <span className="weaponScreen__type__name">{weaponItem?.type}</span>
                        </div>
                    </div> 
                    <Cart />
                </div> 
                { 
                weaponItem?.wear ? 
                <WeaponScreenFooterForRepair weaponItem={weaponItem} />
                : <WeaponScrenFooterForBuy weaponItem={weaponItem}/>}
                
            </div>
        )
    

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        weaponItem : getWeaponItem(state, ownProps.id),
    }
}

export default connect(
    mapStateToProps,
)(WeaponScreen)
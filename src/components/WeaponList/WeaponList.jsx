import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeaponList } from "../../redux/weaponReducer"
import WeaponItem from "../WeaponItem/WeaponItem"
import { NavLink } from "react-router-dom"
import "./WeaponList.scss"


class WeaponList extends Component {

    render() {
        const { weapon, loader, category } = this.props
        console.log(category)
        if(loader) {
            return <div className="weapon-list__wrapper">
                        <h2>Loading...</h2>
                    </div>
        }
        if(!category) {
            return <div className="weapon-list__wrapper">
                        <h2>Выберите категорию</h2>
                    </div>
        }
        return (
            <div className="weapon-list__wrapper">
                <ul className="weapon-list">
                    {weapon.map(item => (
                        <WeaponItem key={item.id} 
                        id={item.id}
                        link={category}
                        caliber={item?.caliber}
                        category={item.category}
                        isActive={(isActive) => isActive}
                        type={item.type} 
                        weight={item.weight}  
                        name={item.name} 
                        price={item.price}
                        wear={item?.wear}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { category } = ownProps
    return {
        weapon: getWeaponList(state, category),
        loader: state.weapon.loader
    }
}

export default connect(
    mapStateToProps
)(WeaponList)
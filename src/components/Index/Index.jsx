import React, { Component } from 'react'
import WeaponList from '../WeaponList/WeaponList'
import WeaponScreen from '../WeaponScreen/WeaponScreen'
import { withParams } from "../../hoc/withParams"
import "./Index.scss"

class Index extends Component {


    render() {
        const {category, id} = this.props.params
        return (
            <div className="index">
                <WeaponList category={category}/>
                <WeaponScreen id={id} />
            </div>
        )  
    }
}

export default withParams(Index)

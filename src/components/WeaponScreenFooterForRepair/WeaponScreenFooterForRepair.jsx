import React, { Component } from 'react'
import BlurBlock from "../BlurBlock/BlurBlock"
import Btn from "../Btn/Btn"

export default class WeaponScreenFooterForRepair extends Component {

    
    render() {
        const { weaponItem } = this.props

        return (
            <div className="weaponScreen__footer__repair">
                <div className="weaponScreen__footer__left__repair">
                    <div className="weaponScreen__footer__wear">
                        <span className="weaponScreen__footer__item__label">
                            Степень исправности
                        </span>
                        <BlurBlock>
                            {weaponItem?.wear}
                        </BlurBlock>
                    </div>
                    <div className="weaponScreen__footer__repaire-price">
                        <BlurBlock>
                            <div className="weaponScreen__footer__repaire-price">
                                Стоймость ремонта: $ {weaponItem?.price.toLocaleString('ru')}
                            </div>
                        </BlurBlock>
                    </div>
                </div>
                <div className="weaponScreen__footer__right__repair">
                    <Btn>
                        <div className="weaponScreen__footer__repair-btn">
                            Отремонтировать
                        </div>
                    </Btn>
                </div>
            </div>
        )
    }
}

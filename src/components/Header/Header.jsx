import { Component } from "react"
import { connect } from 'react-redux';
import Money from "../../assets/img/money.jpg"
import Card from "../../assets/img/credit-card.jpg"
import "./Header.scss"

class Header extends Component {

    render() {
        return (
            <div className="header">
                <h1 className="header__title">
                    Оружейный магазин #1
                </h1>
                <div className="header__balance">
                    <div className="header__item">
                        <img src={Money} alt="" className="header__icon" />
                        <span className="header__text">${this.props.money.toLocaleString('ru')}</span>
                    </div>
                    <div className="header__item">
                        <img src={Card} alt="" className="header__icon" />
                        <span className="header__text">${this.props.card.toLocaleString('ru')}</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    card: state.profile.card,
    money: state.profile.money
})

export default connect(
    mapStateToProps
)(Header)
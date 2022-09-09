import { Component } from "react"
import "./Nav.scss"
import Category from "../Category/Category"
import Btn from "../Btn/Btn"
import { connect } from 'react-redux';
import { Link } from "react-router-dom"

class Nav extends Component {

    render() {
        const categories = this.props.categories
        return(
            <>
                <nav className="nav">
                    <ul className="nav__items">
                        {
                            categories.map((category) => (
                                <Category name={category.name} id={category.id} key={category.id}/>
                            ))
                        }
                    </ul>
                    <Link to={"/category/0"} className="nav__close">
                        <Btn>
                            <div className="btn_close"></div>
                        </Btn>
                    </Link>
                </nav>

            </>

        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories.categories
})
export default connect(mapStateToProps)(Nav)
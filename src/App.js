import './App.scss';
import { Component } from "react"
import { connect } from 'react-redux';
import { fetchCategories } from './redux/categoriesReducer'
import { fetchProfile } from './redux/profileReducer'
import { fetchWeapon } from './redux/weaponReducer'
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout"
import Index from "./components/Index/Index"


class App extends Component  {
  
  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchProfile()
    this.props.fetchWeapon()
  }

  render() {
    return (
      <Routes>
        <Route path={'/'} element={<Layout/> }>
          <Route path={"/"} element={<Index/>}/>
          <Route path={"category/:category/"} element={<Index/>}/>
          <Route path={"category/:category/:id"} element={<Index/>}/>
        </Route>
      </Routes>
    )
  }
}

const mapDispatchToProps = {fetchCategories, fetchProfile, fetchWeapon}


export default connect(
  state => ({}),
  mapDispatchToProps
)(App)



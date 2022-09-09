import React, { Component } from 'react'
import {Outlet} from 'react-router-dom';
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav"


export default class Layout extends Component {
    render() {
        return (
            <div className="app__wrapper">
                <div className="app">
                    <Header />
                    <main>
                        <Nav />
                        <Outlet />
                    </main>
                </div>
            </div>
        )
    }
}


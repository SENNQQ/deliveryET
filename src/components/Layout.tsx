import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header";
import '../style/layoud.scss';
import '../style/common.scss';
const Layout = () => {
    return (
        <div className="wrapper">
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;
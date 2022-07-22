import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header";
import '../style/layoud.scss';
import '../style/common.scss';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    return (
        <div className="wrapper">
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </main>
        </div>
    );
};

export default Layout;
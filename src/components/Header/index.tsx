import React, {FC} from 'react';
import {Link} from "react-router-dom";
import st from './header.module.scss';


const Header:FC = () => {
    return (
        <div className={st.container}>
            <nav className={st.navigationWrapper}>
                <div className={st.navigationWrapper__logoWrapper}>
                    <span className={st.navigationWrapper__stylish}>ETFood</span>
                </div>
                <ul className={st.navigation}>
                    <li className={st.navigation__parent}>
                        <Link className={st.navigation__parent_item} to="/ETFood">Товары</Link>
                    </li>
                    <li className={st.navigation__parent}>
                        <Link className={st.navigation__parent_item} to="/shopCart">Корзина</Link>
                    </li>
                    <li className={st.navigation__parent}>
                        <Link className={st.navigation__parent_item} to="/ETFood">Сравнение</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
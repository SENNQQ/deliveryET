import {Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout";
import ShopCart from "./pages/ShopCart";
import Catalog from "./pages/Catalog";
import {useAppDispatch} from "./store/hook";
import {useMemo} from "react";
import {initCart} from "./store/shopCart/slice";

const App = () => {

    const dispatch = useAppDispatch();

    useMemo(()=>{
        dispatch(initCart());
    },[])

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="ETFood" element={<Catalog/>}/>
                <Route path="shopCart" element={<ShopCart/>}/>
            </Route>
        </Routes>
    );
};

export default App;

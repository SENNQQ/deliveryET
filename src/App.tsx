import {Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout";
import Products from "./pages/Product";
import ShopCart from "./pages/ShopCart";

const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route path="ETFood" element={<Products/>}/>
              <Route path="shopCart" element={<ShopCart/>}/>
          </Route>
      </Routes>
  );
};

export default App;

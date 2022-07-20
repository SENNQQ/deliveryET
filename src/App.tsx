import {Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout";
import ShopCart from "./pages/ShopCart";
import Catalog from "./pages/Catalog";

const App = () => {
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

import {Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout";
import Shop from "./pages/Shop";
import ShopCart from "./pages/ShopCart";

const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route path="ETFood" element={<Shop/>}/>
              <Route path="shopCart" element={<ShopCart/>}/>
          </Route>
      </Routes>
  );
};

export default App;

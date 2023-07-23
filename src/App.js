import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const cartToggle = useSelector((state) => state.cartReducer.toggle);
  return (
    <Layout>
      {cartToggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";

import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { add, list, remove, update } from './api/product';
import axios from 'axios';
import type { ProductTye } from './types/product';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';

import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/ProductManager';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import PrivateRouter from './components/PrivateRouter';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Cart from './pages/Cart';


function App() {
  const [products, setProducts] = useState<ProductTye[]>([]);
  

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts();
  }, [])
  const removeItem = (id: string | undefined) => {
    // call api
    remove(id);

    // reRender
    setProducts(products.filter(item => item._id !== id));
  }
  const onHandleAdd = async (product: ProductTye) => {
    
    const { data } = await add(product);
    
    setProducts([...products, data]);
  }

  const onHandleUpdate = async (product: ProductTye) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data._id ? data: item));
  }

  return (
    <div className="App">
      
      <main>
        <Routes>

          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home />}  />
            <Route path="product">
              <Route index element={<PrivateRouter><ProductPage products={products}/></PrivateRouter> } />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="about" element={<AboutPage />} />
            <Route path="cart" element={<Cart />} />

          </Route>

          <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" >
              <Route index element={<PrivateRouter><ProductManager products={products} onRemove={removeItem}/></PrivateRouter>} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
              <Route path="add" element={<ProductAdd name="" onAdd={onHandleAdd} />} />
            </Route>
            {/* <Route path="/" element={<WebsiteLayout />}/> */}


          </Route>
          {/* <Route path="/login" element={<h1>Login page</h1>} /> */}
      
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          
        </Routes>
      </main>
    </div>
  )
}

export default App

// tsrafce
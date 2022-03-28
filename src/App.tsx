import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";

import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { add, list, remove, update } from './api/product';
import axios from 'axios';
import type { ProductTye } from './types/product';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/ProductManager';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import PrivateRouter from './components/PrivateRouter';

function App() {
  const [products, setProducts] = useState<ProductTye[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts();
  }, [])
  const removeItem = (id: number) => {
    // call api
    remove(id);

    // reRender
    setProducts(products.filter(item => item.id !== id));
  }
  const onHandleAdd = async (product: ProductTye) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }

  const onHandleUpdate = async (product: ProductTye) => {
    const { data } = await update(product);
    setProducts(products.map(item => item.id == data.id ? data: item));
  }

  return (
    <div className="App">

      <header>
        {/* <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product Page</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        </ul> */}

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a>LOGO</a>
          
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a><NavLink to="/">Home Page</NavLink></a>
              </li>
              <li className="nav-item">
                <a><NavLink to="/product">Product Page</NavLink></a>
              </li>
              <li className="nav-item">
                <a><NavLink to="/about">About</NavLink></a>
              </li>
              <li className="nav-item">
                <a><NavLink to="/admin">Admin</NavLink></a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

      </header>
      <main>
        <Routes>

          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home />} />
            <Route path="product">
              <Route index element={<h1>Hien thi san pham</h1>} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="about" element={<h1>About page</h1>} />
          </Route>

          <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" >
              <Route index element={<PrivateRouter><ProductManager products={products} onRemove={removeItem}/></PrivateRouter>} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
              <Route path="add" element={<ProductAdd name="" onAdd={onHandleAdd} />} />
            </Route>
          </Route>

          <Route path="/login" element={<h1>Login page</h1>} />
          
        </Routes>
      </main>
    </div>
  )
}

export default App

// tsrafce
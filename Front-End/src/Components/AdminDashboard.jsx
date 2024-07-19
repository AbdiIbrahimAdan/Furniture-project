import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminNav from './AdminNav';
import AddProduct from './AddProduct';
import OrderHistory from './OrderHistory';
import ProductList from './ProductList';
import Edit from './Edit';
const AdminDashboard = ({ userId }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AdminNav />
      <Routes>
        <Route path="/dashboard" element={<h2>Dashboard Content</h2>} />
        <Route path="/products" element={
          <>
            <ProductList />
          </>
        } />
        <Route path="/add" element={
          <>
            <h2>Products</h2>
          
            <AddProduct />
          </>
        } />

       <Route path="/edit" element={
          <>
            <h2>Edit</h2>
            <Edit/>
          </>
        } />
     
        <Route path="/orders" element={
          <>
            <h2>Order History</h2>
            <OrderHistory userId={userId} />
          </>
        } />
      </Routes>
    </div>
  );
};

export default AdminDashboard;

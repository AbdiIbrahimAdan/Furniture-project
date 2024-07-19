

import React from 'react';
import { Link } from 'react-router-dom'; 

const AdminNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/products">Products</Link>
        </li>
        <li>
          <Link to="/admin/add">add product</Link>
        </li>
        <li>
          <Link to="/admin/orders">Orders</Link>
        </li>
        <li>
          <Link to="/admin/Edit">Edit</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default AdminNav;

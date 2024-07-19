import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/admin/orders/${user.id}`);
                setOrders(response.data.orders);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, [user.id]);

    return (
        <div>
            <h2>Profile</h2>
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <h3>Order History</h3>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        {order.product.name} - Quantity: {order.quantity} - Status: {order.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;

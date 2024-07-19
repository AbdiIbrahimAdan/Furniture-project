import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistory = ({ userId }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/admin/orders/${userId}`);
                setOrders(response.data.orders);
            } catch (error) {
                console.error('Error fetching order history:', error);
            }
        };

        fetchOrders();
    }, [userId]);

    const handleApproveOrder = async (orderId) => {
        try {
            const response = await axios.put(`http://localhost:3000/api/admin/orders/${orderId}`, {
                status: 'approved'
            });
            if (response.data.success) {
                setOrders(orders.map(order => 
                    order.id === orderId ? { ...order, status: 'approved' } : order
                ));
            }
        } catch (error) {
            console.error('Error approving order:', error);
        }
    };

    return (
        <div>
            <h2>Order History</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        {order.product.name} - Quantity: {order.quantity} - Status: {order.status} 
                        <button onClick={() => handleApproveOrder(order.id)}>Approve</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;

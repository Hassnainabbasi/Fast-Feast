import React, { useContext, useEffect, useState } from 'react';
import { OrdersContext } from '../context/OrdersContext';
import { Spin } from 'antd';
import { AuthContext } from '../context/AuthContext';

function OrdersAdmin() {
    const { orders, fetchOrders } = useContext(OrdersContext);
    const { currentUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadOrders = async () => {
            if (currentUser) {
                await fetchOrders();
            }
            setLoading(false);
        };

        loadOrders();
    }, [fetchOrders, currentUser]);

    if (loading) {
        return <h1 className='text-center'><Spin /></h1>;
    }

return (
    <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">My Orders</h2>
        {orders.length === 0 ? (
            <p>No orders yet.</p>
        ) : (
            <div className="grid grid-cols-1 gap-8">
                {orders.map((order) => (
                    <div key={order.id} className="bg-white shadow-md rounded-lg p-4">
                        <h3 className='text-xl font-semibold'>Order #{order.id}</h3>
                        <p className='text-md font-semibold'>Total Price: {order.totalPrice.toFixed(2)}</p>
                        <p>Total Quantity: {order.totalQuantity}</p>
                        <p>Status: {order.status}</p>
                        <p>Order Placed: {new Date(order.timestamp).toLocaleString()}</p>
                        <h4 className="font-semibold mt-2">Recipes:</h4>
                        <ul>
                            {order.recipes.length > 0 ? (
                                order.recipes.map((recipe, idx) => (
                                    <li key={idx}>{recipe}</li>
                                ))
                            ) : (
                                <li>No recipes available</li>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        )}
    </div>
);
}

export default OrdersAdmin;

export const createOrder = async ({ name, phone, address, total, paymentMethod, orderDate, orderDetails }) => {
    const res = await fetch('/api/order', {
        method: "POST",
        body: JSON.stringify({
            name: name,
            phone: phone,
            address: address,
            total: parseFloat(total),
            method: paymentMethod,
            status: 1,
            orderDate: orderDate,
            orderDetails: orderDetails
        }),
    });
    const id = await res.json();
    return id;
} 
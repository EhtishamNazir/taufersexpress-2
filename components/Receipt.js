import React from 'react';

import classes from '../styles/receipt.module.css';

export const ComponentToPrint = React.forwardRef(({ orderData, orderDetails }, ref) => {
    return (
        <div className={classes.receipt} ref={ref}>
            <div className={classes.receiptData}>
                <h1 className={classes.brandName}>TaufersExpress</h1>
                <h2>Contact Info</h2>
                <p><span>Email: </span>taufersexpress@gmail.com</p>
                <p><span>Phone: </span>+39 324 890 9003</p>
                <p><span>Address: </span>Vicolo Bayer, 14, 39032 Campo Tures BZ, Italy</p>
                <table>
                    <thead>
                        <tr>
                            <th><h2>Items</h2></th>
                            <th><h2>Qty</h2></th>
                            <th><h2>Sub Total</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderDetails.map((detail, index) => {
                            return (
                                <tr key={index}>
                                    <td>{detail.name}</td>
                                    <td>{detail.quantity}</td>
                                    <td>&euro; {detail.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className={classes.totalAmount}>
                    <span>Total Amount: {orderData.totalAmount}</span>
                </div>
            </div>
        </div>
    );
});



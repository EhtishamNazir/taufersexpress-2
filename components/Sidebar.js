import Link from 'next/link';

import classes from '../styles/sidebar.module.css';

function Sidebar() {
    return (
        <div className={classes.sidebar}>
            <ul>
                <li><Link href='/dashboard'>Home</Link></li>
                <li><Link href='/dashboard/addItem'>Add Item</Link></li>
                <li><Link href='/dashboard/newOrder'>New Order</Link></li>
                <li><Link href='/dashboard/completedOrders'>Completed Orders</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar;
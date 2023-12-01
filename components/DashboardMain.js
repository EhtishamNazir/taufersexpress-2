import Link from 'next/link';

import classes from '../styles/dashboardMain.module.css';

function DashboardMain(props) {
    return (
        <div className={classes.main}>
            {props.children}
        </div>
    )
}

export default DashboardMain;
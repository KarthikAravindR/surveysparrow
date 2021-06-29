import React from 'react'

import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
    let additionalclasses = [classes.SideDrawer, classes.Close]
    if (props.closed) {
        additionalclasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <div>
            <Backdrop show={props.closed} clicked={props.open} />
            <div className={additionalclasses.join(' ')}>
                <button className={classes.closeButton} onClick={props.open}>&times;</button>
                <div className={classes.sidebarNav}>
                    <button>Products</button>
                    <button>Features</button>
                    <button>Use Cases</button>
                    <button>Pricing</button>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

export default sideDrawer
import React, { useState, useEffect } from 'react'

import classes from './Header.module.css'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import SideDrawer from '../SideDrawer/SideDrawer'

const Header = props => {
    const [showsidebar, setshowsidebar] = React.useState(false)
    const [shrunk, setShrunk] = useState(false)
    useEffect(() => {
        const handler = () => {
            setShrunk(shrunk => {
                if(!shrunk && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
                    return true
                }
                if(shrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4){
                    return false
                }
                return shrunk
            })
        }
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])
    const sidebarshowhandler = (props) => {
        setshowsidebar(true)
    }
    const backdrophandler = (props) => {
        setshowsidebar(false)
    }
    return (
        <header 
            style={shrunk ? 
                {   
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.35)", 
                    background: "linear-gradient(to right, #AFBAC9, #9BA7B8)", 
                    height: "80px",
                    transition: "ease 0.1s"
                } : 
                {
                    boxShadow: "none", 
                    backgroundColor: "#AFBAC900", 
                    height: "130px",
                    transition: "ease 0.1s"
                }}>
            <div className={classes.headerTitle}>
                <p>Maxeon</p>
            </div>
            <div className={classes.headerNav}>
                <button>Products</button>
                <button>Features</button>
                <button>Use Cases</button>
                <button>Pricing</button>
                <button>Login</button>
            </div>
            <DrawerToggle clicked={sidebarshowhandler} />
            <SideDrawer closed={showsidebar} open={backdrophandler} />
        </header>
    )
}

export default Header
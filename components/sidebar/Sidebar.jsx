import React, { useState } from 'react';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

import theme from "../theme/theme";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { IconContext } from 'react-icons/lib'

const Sidebar = () => {

    const classes = useStyles();

    const [toggle, setToggle] = useState(false);


    return ( 
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav>
                    <Box ml={2} className={classes.barBox}>
                        {
                            toggle

                            ?

                            <Link href="/#">
                                <AiIcons.AiOutlineClose onClick={() => setToggle(!toggle)} />
                            </Link>

                            :

                            <Link href="/#">
                                <FaIcons.FaBars onClick={() => setToggle(!toggle)} />
                            </Link>

                        }
                    </Box>
                </nav>
                <nav className={toggle ? classes.sidebarNav : null}>
                    <Box>
                        <Box ml={2} className={toggle ? classes.sidebarWrap : classes.sidebarWrapActive}>
                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index}/>;
                            })}
                        </Box>
                    </Box>
                </nav>
            </IconContext.Provider>
        </>
     );
}
 
export default Sidebar;

const useStyles = makeStyles({
    barBox: {
        fontSize: '2rem',
        heigh: '80ox',
        display: 'flex',
        alignItems: 'center',
    },
    sidebarNav: {
        background: '#15171c',
        width: '250px',
        height: '100vh',
        display: 'flex',
        position: 'fixed',
        top: '80px',
        right: '0',
        transition: '350ms',
        zIndex: '10',
    },
    sidebarWrap: {
        width: '100%',
    },
    sidebarWrapActive: {
        display: 'none',
    },
    disappear: {
        display: 'none',
    }  
  });
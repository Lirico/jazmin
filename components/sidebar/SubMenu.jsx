import React, { useState } from 'react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const SubMenu = ({ item }) => {

    const classes = useStyles();

    const [ subnav, setSubnav ] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return ( 
        <>
           <Link href="/#">
               <Box>
                <Box className={classes.sideBarLink}>
                        <Box onClick={item.subNav && showSubnav}>
                            {item.icon}
                            <span className={classes.sidebarLabel}>{item.title}</span>
                        </Box>
                        <Box onClick={item.subNav && showSubnav}>
                            {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null }
                        </Box>
                    </Box>
                    {subnav && item.subNav.map((item, index) => {
                        return(
                            <Link href="/" key={index}>
                                <Box className={classes.dropdownBox}>
                                    {item.icon}
                                    <span className={classes.sidebarLabel}>{item.title}</span>
                                </Box>
                            </Link>
                        )
                    })}
                </Box>
           </Link> 
        </>
     );
}
 
export default SubMenu;

const useStyles = makeStyles({
    sideBarLink: {
        display: 'flex',
        color: '#e1e9fc',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        listStyle: 'none',
        height: '60px',
        textDecoration: 'none',
        fontSize: '18px',
        '&:hover': {
            background: '#252831',
            borderLeft: '4px solid #632ce4',
            cursor: 'pointer',
        }
    },
    sidebarLabel: {
        marginLeft: '16px'
    },
    dropdownBox: {
        background: '#414757',
        height: '60px',
        paddingLeft: '3rem',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#f5f5f5',
        fontSize: '18px',

        '&:hover': {
            background: '#632ce4',
            cursor: 'pointer'
        }
    }
  });
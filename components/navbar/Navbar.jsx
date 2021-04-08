import React from 'react';
import Logo from './logo';
import Menu from './menu';
import Sidebar from '../sidebar/Sidebar';

import theme from "../theme/theme";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const Navbar = () => {

    const classes = useStyles();

    return ( 
        <>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                    <Logo />
                </Box>
                <Box className={classes.hideMenu}>
                    <Menu />
                </Box>
                <Box className={classes.hideBox}>
                    <Sidebar />
                </Box>
            </Box>
        </>
     );
}
 
export default Navbar;

const useStyles = makeStyles({
    nav: {
      background: '#15171c',
    },
    hideMenu: {

        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    hideBox: {
        display: 'none',

        [theme.breakpoints.down("sm")]: {
            display: "block",
        },
    }
});
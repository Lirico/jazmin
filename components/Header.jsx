import React from 'react';
import Navbar from './navbar/Navbar';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const Header = () => {

    const classes = useStyles();

    return ( 
        <>
            <Box className={classes.headerbg}>
                <Box>
                    <Navbar />
                </Box>
            </Box>
        </>
     );
}
 
export default Header;

const useStyles = makeStyles({
    headerbg: {
      background: '#15171c',
    }  
});


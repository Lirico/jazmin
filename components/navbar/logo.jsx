import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const Logo = () => {

    const classes = useStyles();
    
    return ( 
        <Box mb={2}>
            <Link href="/">
                <Box display="flex" alignItems="center">
                    <Image 
                        src="/images/logo.png" alt="" 
                        width={70} 
                        height={70} 
                        objectFit="cover" 
                        quality={100}
                        className={classes.imagepointer}
                    />
                    <h1 className={classes.title}>@jazmin.tattoo</h1>
                </Box>
            </Link>
        </Box>
     );
}
 
export default Logo;

const useStyles = makeStyles({
    imagepointer: {
        cursor: "pointer",
    },
    title:{
        color: 'white',
    }
  });
import React from 'react'
import {Typography, withWidth, Hidden, Button} from '@material-ui/core';
const Oculto = (props) =>{
    return (
        <div>
            <Typography variant="h6" color="initial">  
                Ancho:{props.width}
            </Typography>
            <Hidden lgUp>
                <Button variant="contained" color="primary">
                  xs 
                </Button>
            </Hidden>
        </div>
    )
}
export default withWidth() (Oculto);
import React from 'react'
import NavBar from './NavBar'
import {
    Hidden,
    makeStyles,
} from '@material-ui/core';
import Cajon from './Cajon';

const estilos = makeStyles(theme => ({
    root:{
        display: 'flex'
    },
    toolBar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))


const Contenedor = () => {
    const classes = estilos()
    const [abrir, setAbrir] = React.useState(false)

    const accionAbrir = () => {
        setAbrir(!abrir)
    }
    return (
        <div className={classes.root}>
            <NavBar accionAbrir={accionAbrir}/>
            <Hidden xsDown> 
            <Cajon
            variant="permanent"
            open={true}
            />
            </Hidden>
            <Hidden smUp> 
            <Cajon
            variant="temporary"
            open={abrir}
            onClose={accionAbrir}
            />
            </Hidden>
            <div className={classes.content}>
                <div className = {classes.toolBar}></div>
                contenido
            </div>
        </div>
    )
}

export default Contenedor

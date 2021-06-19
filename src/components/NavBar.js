import React from 'react';
import imagenes from '../assets/imagenes'
import { Button, IconButton, Typography, AppBar, Toolbar, makeStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from '../temaConfig'
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
      marginLeft : theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    title: {
      flexGrow: 1
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
}))

const Navbar = (props)=>{
    const classes = useStyles() 
    return (
        <div>
            {/* <span>
                <img src={imagenes.logoGorWhite} height="40" />
              <ul>
                  <li><a href=" ">Productos</a></li>
                  <li><a href=" ">Marcas</a></li>
                 <li><Button variant="text" color="secondary" variant="contained" startIcon={<DeleteIcon/>}>
                   Contacto
                 </Button></li> 
                 <IconButton aria-label="delete">
                   <DeleteIcon color="secondary"/>
                 </IconButton>
              </ul>
              <Typography variant="h1" color="initial">
                  Hola Mundo
              </Typography>
            </span>
            <Button className={classes.estilos}>
              Mi boton personalizado
            </Button>
            <br/>
 */}



            <AppBar className={classes.appBar}>
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  Este es el bueno
                </Typography>
                  <IconButton 
                  color="inherit" 
                  aria-label="menu" 
                  className={classes.menuButton}
                  onClick={()=>props.accionAbrir()}
                  >
                  <MenuIcon/>
                  </IconButton>
              </Toolbar>
            </AppBar>
            

            {/* <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              Boton
            </Button>
            <Button variant="contained" color="secondary">                
              Boton
            </Button>
            </ThemeProvider> */}

        </div>
    )
}

export default Navbar;
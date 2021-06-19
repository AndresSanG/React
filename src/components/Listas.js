import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider 
} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import GitHubIcon from '@material-ui/icons/GitHub';

const Listas = () => {
    return (
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <AddShoppingCartIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Compren
                    </ListItemText>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon>
                        <GitHubIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        El experto
                    </ListItemText>
                </ListItem>
                <Divider/>
            </List>
        </div>
    )
}
export default Listas   
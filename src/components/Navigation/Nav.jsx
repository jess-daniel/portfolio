import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import ComputerIcon from '@material-ui/icons/Computer';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import MenuIcon from '@material-ui/icons/Menu';

// nav component
const Nav = () => {
    const [state, setState] = useState({
        left: false
    })

    const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
    };
    
    const sideList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
            <>
            <ListItem button >
                <ListItemIcon><InfoIcon/></ListItemIcon>
                <ListItemText primary={"About Me"} />
            </ListItem>
            <ListItem button >
                <ListItemIcon><ComputerIcon/></ListItemIcon>
                <ListItemText primary={"Technologies"} />
            </ListItem>
            <ListItem button >
                <ListItemIcon><FolderSpecialIcon/></ListItemIcon>
                <ListItemText primary={"Projects"} />
            </ListItem>
            </>
      </List>
    </div>
  );

    return (
        <nav>
            <Button color={"inherit"} onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </nav>
    )
}

export default Nav;

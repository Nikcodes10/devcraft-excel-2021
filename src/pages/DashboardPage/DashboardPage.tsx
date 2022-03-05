import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { BiHomeAlt, BiCreditCard, BiTrendingUp, BiBookmark } from "react-icons/bi";

import logo from '../../assets/svg/logo.svg'
import named_logo from '../../assets/svg/named_logo.svg'

import './DashboardPage.css'
import CustomTitle from '../../utils/CustomTitle';
import { Dash } from '../../components';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  marginTop: '1rem',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    background: 'transparent',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


function DashboardPage() {

    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState(1)

    let navigate = useNavigate();

    const goToProfile = () => {
        navigate("/profile")
    }
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    let renderTab
    if (tab === 1) {
        renderTab = <Dash />
    } else if(tab === 2) {
        renderTab = null
    } else if(tab === 3) {
        renderTab = null
    } else if(tab === 4) {
        renderTab = null
    }

    let renderTitle
    if (tab === 1) {
        renderTitle = 'Dashboard'
    } else if(tab === 2) {
        renderTitle = 'Account'
    } else if(tab === 3) {
        renderTitle = 'Transactions'
    } else if(tab === 4) {
        renderTitle = 'Saved'
    }

    return (
        <div className='dashboardPage'>
            <div className="circle1"/>
            <div className="circle2"/>
            <CustomTitle title={renderTitle}/>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Drawer 
                    variant="permanent" 
                    open={open}
                    PaperProps={{
                        sx: {
                          backgroundColor: "transparent",
                        }
                    }}
                    onMouseOver={handleDrawerOpen}
                    onMouseLeave={handleDrawerClose}
                >
                    <DrawerHeader>
                        <IconButton sx={{ display: open ? 'none' : 'block' }}>
                            <img src={logo} alt="" className='drawer_logo'/>
                        </IconButton>
                        <IconButton sx={{ display: !open ? 'none' : 'block' }}>
                            <img src={named_logo} alt="" className='drawer_logo_named'/>
                        </IconButton>
                    </DrawerHeader>
                    <List>
                        <ListItemButton
                            className={`${tab === 1 ? 'border' : ''}`} 
                            onClick={() => setTab(1)}
                            key='Dashboard'
                            sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5}}
                        >
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}}>
                                <BiHomeAlt className={`listItemIcon ${tab === 1 ? 'listItemIcon__active' : ''}`}/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                                <span className={`listItemText ${tab === 1 ? 'listItemText__active' : ''}`}>Dashboard</span>
                            </ListItemText>
                        </ListItemButton>

                        <ListItemButton
                            className={`${tab === 2 ? 'border' : ''}`} 
                            onClick={() => setTab(2)}
                            key='Account'
                            sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5}}
                        >
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}}>
                                <BiCreditCard className={`listItemIcon ${tab === 2 ? 'listItemIcon__active' : ''}`}/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                                <span className={`listItemText ${tab === 2 ? 'listItemText__active' : ''}`}>Account</span>
                            </ListItemText>
                        </ListItemButton>

                        <ListItemButton
                            className={`${tab === 3 ? 'border' : ''}`} 
                            onClick={() => setTab(3)}
                            key='Transactions'
                            sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5}}
                        >
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}}>
                                <BiTrendingUp className={`listItemIcon ${tab === 3 ? 'listItemIcon__active' : ''}`}/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                                <span className={`listItemText ${tab === 3 ? 'listItemText__active' : ''}`}>Transactions</span>
                            </ListItemText>
                        </ListItemButton>

                        <ListItemButton
                            className={`${tab === 4 ? 'border' : ''}`} 
                            onClick={() => setTab(4)}
                            key='Saved'
                            sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5}}
                        >
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}}>
                                <BiBookmark className={`listItemIcon ${tab === 4 ? 'listItemIcon__active' : ''}`}/>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                                <span className={`listItemText ${tab === 4 ? 'listItemText__active' : ''}`}>Saved</span>
                            </ListItemText>
                        </ListItemButton>

                        <ListItemButton
                            className='drawer_profile_item' 
                            onClick={goToProfile}
                            key='Profile'
                            sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5}}
                        >
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}}>
                                <Link to='/profile'>
                                    <img src="https://avatars.githubusercontent.com/u/43471295?v=4" alt=''  className='drawer_profile_img'/>    
                                </Link>
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                                <span className='listItemText'>Profile</span>
                            </ListItemText>
                        </ListItemButton>
                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <div className='dashboard__container'>
                        {renderTab}    
                    </div>                    
                </Box>
            </Box>
        </div>
    )
}

export default DashboardPage
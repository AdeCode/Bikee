import {alpha} from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import {Badge, InputBase} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Cancel, Mail, NotificationImportant, Search } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import Logo from '../../images/home/Logo.png'
import extractFirstLetter from '../../@helpers/helperFunction';
import { AuthContext } from '../../contexts/AuthContext';


const useStyles = makeStyles((theme) => ({
    appbar:{
        backgroundColor: theme.secondary.bg,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    search:{
        display: 'flex',
        alignItems:'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover':{
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        [theme.breakpoints.down("sm")]:{
            display: (props) => (props.open ? 'flex' : 'none'),    
            width: '60%',         
        },

    },
    logoLg:{
        display: 'none',
        [theme.breakpoints.up("sm")] :{
            display: 'block',
        },
    },
    logoSm:{
        display: 'block',
        [theme.breakpoints.up("sm")] :{
            display: 'none',
        },
    },
    input:{
        color: "white",
        marginLeft: theme.spacing(2),
        
    },
    icons:{
        alignItems: 'center',       
        display: (props) => (props.open ? 'none' : 'flex')
    },
    badge:{
        marginRight: theme.spacing(2),
    },
    searchButton:{
        marginRight: theme.spacing(2),
        // [theme.breakpoints.up('sm')]:{
        //     display: 'none',
        // }
    },
    cancel:{
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
    }
  }))


export default function Navbar() {
    const [open,setOpen] = useState(false)
    const {state} = useContext(AuthContext)
    if(state){
        console.log(state.user.first_name)
    }
    // state && 
    const classes = useStyles({open})
    return (
        <AppBar position='sticky' className={classes.appbar} style={{backgroundColor:'#0F0000'}}>
            <Toolbar className={classes.toolbar}>
                <img src={Logo} alt='bikee'/>
                <div className={classes.search}>
                    <Search/>
                    <InputBase placeholder='Search...' className={classes.input}/>                        
                    <Cancel className={classes.cancel} onClick={()=>setOpen(false)} sx={{display:{sm:'none',xs:"block"}}}/>
                </div>
                <div className={classes.icons}>
                    <Search 
                        className={classes.searchButton}   
                        onClick={()=>setOpen(true)}
                        sx={{display:{sm:'none',xs:"block"}}}
                    />
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <NotificationImportant/>
                    </Badge>
                    <Avatar alt={state&&state.user.first_name} src="/IMG_2020.jpg"/>
                </div>
            </Toolbar>
        </AppBar>
    )
}

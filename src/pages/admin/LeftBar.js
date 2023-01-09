import React from 'react'
import { makeStyles } from '@mui/styles'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Bookmark, ExitToApp, Home, List, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from '@mui/icons-material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Grid, Paper } from '@mui/material';
import {Link, useNavigate} from 'react-router-dom'
import {useMutation} from 'react-query'
import authService from '../../@services/authService';


const useStyles = makeStyles((theme) => ({
   container:{
       paddingTop:theme.spacing(5),
    //    backgroundColor: '#3f51b5',
       backgroundColor: theme.secondary.bg,
       height: '100vh',
       color: 'white',
    //    maxWidth:'50px',
       [theme.breakpoints.up("sm")]:{
        backgroundColor: theme.secondary.bg,
        color: '#ffffff',
        border: '1px solid #ece7e7',
        margin: '0px',
        },
        // position: 'sticky',
        // top: 0,
   },
   icon:{
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]:{
            fontSize: '18px',
        }
   },
   item:{ 
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]:{
            marginBottom: theme.spacing(3),
            cursor: 'pointer',
        }
    },
    text:{
        [theme.breakpoints.down('sm')]:{
            display: 'none',
        },
        fontWeight:500,
    }
}))

export default function Leftbar() {

    const navigate = useNavigate()

    const logoutMutation = useMutation(authService.logout, {
        onSuccess: res => {
            console.log(res)
            localStorage.removeItem('token')
            navigate('/login')
        },
        onError: err => {
            console.log(err.message)
            alert("Could not sign in")
            //handleClick()
        }
    }) 

    const logout = () => {
        // localStorage.removeItem('token')
        // navigate('/login')
        logoutMutation.mutate()
    }
    
    const classes = useStyles()
    return (
        <Box flex={2}>
            <Container className={classes.container} flex={1}>
                {/* <Box position='fixed'></Box> */}
            <div>
                <Link to='/dashboard' className={classes.item}>
                    <Home className={classes.icon}/>
                    <Typography className={classes.text}>
                        Homepage
                    </Typography>
                </Link>  
            </div>
            <div>
                <Link to='/dashboard/products' className={classes.item}>
                    <List className={classes.icon}/>
                    <Typography className={classes.text}>
                        Products
                    </Typography>
                </Link>
            </div>
            <div>
                <Link to='/dashboard/add-product' className={classes.item}>
                    <AddCircleIcon className={classes.icon}/>
                    <Typography className={classes.text}>
                        Add Product
                    </Typography>
                </Link>

                
            </div>
            <div>
                <Link to='/dashboard/orders' className={classes.item}>

                <List className={classes.icon}/>
                <Typography className={classes.text}>
                    Orders
                </Typography>
                </Link>
            </div>
            {/* <div className={classes.item}>
                <PhotoCamera className={classes.icon}/>
                <Typography className={classes.text}>
                    Camera
                </Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon}/>
                <Typography className={classes.text}>
                    Videos
                </Typography>
            </div>
            <div className={classes.item}>
                <TabletMac className={classes.icon}/>
                <Typography className={classes.text}>
                    Apps
                </Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon}/>
                <Typography className={classes.text}>
                    Collections
                </Typography>
            </div>
            <div className={classes.item}>
                <Storefront className={classes.icon}/>
                <Typography className={classes.text}>
                    Market Place
                </Typography>
            </div> */}
            <div className={classes.item}>
                <Settings className={classes.icon}/>
                <Typography className={classes.text}>
                    Settings
                </Typography>
            </div>
            <div className={classes.item} onClick={logout}>
                <ExitToApp className={classes.icon}/>
                <Typography className={classes.text}>
                    Logout
                </Typography>
            </div>
        </Container>
        </Box>
        
    )
}

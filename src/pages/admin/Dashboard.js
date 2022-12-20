import React from 'react'
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Leftbar from './LeftBar';
import Main from './Main';
import Navbar from './Navbar';
import { Box, Grid, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './AddProduct';
import {Outlet} from "react-router-dom"


// import { theme } from '../../components/@theme/theme';

const useStyles = makeStyles((theme)=>({
  bg:{
    background:theme.nav.main,
    color:theme.nav.white,
  },
  main:{
    paddingTop: '40px',
  }
}))

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

function Dashboard() {
  // const theme = useStyles()
  const classes = useStyles()
  return (
    <div style={{display:'flex',flexDirection:'column',margin:'0px'}}>
      <Grid item xs container direction="column" margin="0px" spacing={2}> 
        <Navbar/>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Leftbar/>
          <Box flex={10} sx={{display:'flex', justifyContent:'center'}} className={classes.main}>
            <Outlet/>
          </Box>
          {/* <Main/> */}
        </Stack>
      </Grid>
    </div>
    
  )
}

export default Dashboard
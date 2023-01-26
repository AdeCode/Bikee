import React from 'react'
import { Box, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    container:{
        // paddingTop:theme.spacing(5),
        [theme.breakpoints.up("sm")]:{
        
         },
         
    },
    
 }))


function Main() {
    const classes = useStyles()

  return (
    <Box flex={6} className={classes.container}>
        <h2>Admin Dashboard</h2>
    </Box>
  )
}

export default Main
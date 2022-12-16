import React from 'react'
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
// import { theme } from '../../components/@theme/theme';

// const useStyles = makeStyles((theme)=>({
//   bg:{
//     background:theme.pallete.lightBlue
//   }
// }))

function Dashboard() {
  const theme = useTheme()
  // const classes = useStyles()
  return (
    <div className={theme.palette.lightBlue}>Dashboard
      <Button
        variant="outlined"
      >Primary</Button>
    </div>
  )
}

export default Dashboard
import AppBar from '@mui/material/AppBar/AppBar'
import Button from '@mui/material/Button/Button'
import Grid from '@mui/material/Grid/Grid'
import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton/IconButton';
import { Box } from '@mui/material';
import { ReactComponent as HeaderLogo } from '../../Assets/Images/header-logo.svg'
import {Link} from 'react-router-dom'

type Props = {}

const HeaderLayout = (props: Props) => {
  return (
    <AppBar  sx={{bgcolor:'#fff',boxShadow:'0', height:'64px',alignItems:'center'}}>
        <Grid container direction={'row'} justifyContent={'space-around'} alignItems={'center'}>
            <Box m={2}>
                 <Button sx={{color:'gray'}} startIcon={<MenuRoundedIcon/>}>{'منو'}</Button>
                <Link to={'/'}>
                  <Button sx={{color:'gray'}} >خانه</Button>
                </Link>
                <Link to={'/livePrice'}>
                  <Button sx={{color:'gray'}} >قیمت لحظه ای</Button>
                </Link> 
                  <Button sx={{color:'gray'}} >کارمزد ها</Button>
                  <Button sx={{color:'gray'}} >پرتفوی</Button>
            </Box>
            <Box m={2}>
                <Button variant={'contained'}>ورود/ثبت نام</Button>
                <span style={{background:'gray',height:'40px',width:'1px'}}></span>
                <IconButton><HeaderLogo width={'120px'} height={'38px'}/></IconButton>
            </Box>
        </Grid>
    </AppBar>
  )
}

export default HeaderLayout
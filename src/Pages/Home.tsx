import { TextField } from '@mui/material'
import Grid from '@mui/material/Grid/Grid'
import React, { useState } from 'react'
import MainLogo from '../Assets/Images/BitbargBody.webp'
import {coinApi} from '../Api/Api'
type Props = {}

const Home = (props: Props) => {
    const [coin,setCoin]=useState('bitcoin')
    const [coinInfo,setCoinInfo] = useState({})
   
    const handleGetData = async () => {
        const data = await coinApi(coin)
        setCoinInfo(data)
    }
    const handleChange = () => {

    }
  return (
    <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
        <Grid item container direction={'column'} alignItems={'center'} justifyContent={'center'}>
            <Grid item mt={16}>
                <img width={'272px'} height={'100%'} alt='' src='https://bitbarg.com/_next/image?url=https%3A%2F%2Fcdn.bitbarg.com%2Flogo%2Fgg9T0rL6onGUADvozpUAXONvwJF3NR1KKrJMeZ0h.png&w=1920&q=75'/>
            </Grid>
            <form>
                <TextField variant={'outlined'}  label={'ارز'}  name={'coinName'}></TextField>
                <TextField variant={'outlined'}  label={'مقدار'}  name={'amount'}></TextField>
                <TextField variant={'outlined'}  label={'قیمت'}  name={'tprice'}></TextField>
            </form>
        </Grid>
    </Grid>
  )
}

export default Home
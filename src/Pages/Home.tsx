import { Autocomplete, TextField } from '@mui/material'
import Grid from '@mui/material/Grid/Grid'
import React, { useState , useEffect } from 'react'

import axios from 'axios'
type Props = {
    
}

const Home = (props: Props) => {
    const Api = {
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/coins/markets',
        params: {vs_currency: 'usd', page: '1', per_page: '100', order: 'market_cap_desc'},
        headers: {
          'X-RapidAPI-Key': 'b922fcb3b0msh6aea5f733a51e16p18bf80jsn9f74990d6569',
          'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
      };
    const [coin,setCoin]=useState('bitcoin')
    const [coinInfo,setCoinInfo] = useState([])
    const [coinForm , setCoinForm]=useState({coin:'',amount:1,price:0})
    useEffect(()=>{
        axios.request(Api).then((response)=>{
            setCoinInfo(response.data)
        })
    },[])
   
    
    console.log(coinInfo)
    const handleChange = () => {

    }
  return (
    <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
        <Grid item container direction={'column'} alignItems={'center'} justifyContent={'center'}>
            <Grid item mt={16}>
                <img width={'272px'} height={'100%'} alt='' src='https://bitbarg.com/_next/image?url=https%3A%2F%2Fcdn.bitbarg.com%2Flogo%2Fgg9T0rL6onGUADvozpUAXONvwJF3NR1KKrJMeZ0h.png&w=1920&q=75'/>
            </Grid>
            <form>
                <TextField variant={'outlined'}  label={'قیمت'}  name={'coinName'}></TextField>
                <TextField variant={'outlined'}  label={'مقدار'}  name={'amount'}></TextField>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    
                    options={coinInfo.map((item:any)=> item.id)}
                    
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="ارز" />}
                    />
            </form>
        </Grid>
    </Grid>
  )
}

export default Home
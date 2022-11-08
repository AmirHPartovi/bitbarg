import { Autocomplete, TextField } from '@mui/material'
import Grid from '@mui/material/Grid/Grid'
import React, { useState , useEffect } from 'react'
import CoinTable from './CoinTable'
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
    const [form , setForm]=useState({type:'',amount:1,price:0})
    useEffect(()=>{
        axios.request(Api).then((response)=>{
            setCoinInfo(response.data)
        })
    },[])
   
    
    
    const handleChange = (e:any) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
  return (
    <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
        <Grid item container direction={'column'} alignItems={'center'} justifyContent={'center'}>
            <Grid item mt={16}>
                <img width={'272px'} height={'100%'} alt='' src='https://bitbarg.com/_next/image?url=https%3A%2F%2Fcdn.bitbarg.com%2Flogo%2Fgg9T0rL6onGUADvozpUAXONvwJF3NR1KKrJMeZ0h.png&w=1920&q=75'/>
            </Grid>
            <form style={{display:'flex',flexDirection:'row'}}>
                <TextField variant={'outlined'}  label={'قیمت'}         value={coinInfo.filter((item:any)=>item.name.toUpperCase()===form.type.toUpperCase()).map((item:any)=>item.current_price * form.amount)} name='price'></TextField>
                <TextField variant={'outlined'}  label={'مقدار'}       onChange={handleChange} value={form.amount} name='amount'></TextField>
                {/* <TextField variant={'outlined'}  label={'ارز دیجیتال'} onChange={handleChange} value={form.type} name='type'></TextField> */}
                <Autocomplete
                    onChange={handleChange}
                    sx={{width:225}}
                    options={coinInfo.map((item:any)=>item.name)}
                    renderInput={(params) => <TextField {...params} variant={'outlined'}  label={'ارز دیجیتال'} onSelect={handleChange} value={form.type} name='type'/>}
                  />
            </form>
        </Grid>
        <Grid  xs={12} my={64}>
        <CoinTable/>
        </Grid>
    </Grid>
  )
}

export default Home
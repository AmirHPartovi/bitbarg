import Grid from '@mui/material/Grid/Grid'
import TextField from '@mui/material/TextField/TextField'
import Typography from '@mui/material/Typography/Typography'
import {useState , useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'

type Props = {
    
}

const CoinTable = (props: Props) => {
    const Api = {
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/coins/markets',
        params: {vs_currency: 'usd', page: '1', per_page: '100', order: 'market_cap_desc'},
        headers: {
          'X-RapidAPI-Key': 'b922fcb3b0msh6aea5f733a51e16p18bf80jsn9f74990d6569',
          'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
      }
      const [coinInfo,setCoinInfo] = useState([])
      useEffect(()=>{
        axios.request(Api).then((response:any)=>{
            setCoinInfo(response.data)
        })
    },[])
    const [serch,setSerch] =useState<string>('')
    const handleSearch = (e:any) => {
        setSerch(e.target.value)
    }

  return (
    <Grid container direction={'column'} alignItems={'center'} sx={{background:"#e0e0e0",width:'100%'}}>
        <Grid container direction={'column'} alignItems={'center'} mt={16} p={2} sx={{background:"#fff",width:'80%',borderRadius:'10px'}} >
            <Grid container p={2} alignItems={'flex-start'}>
            <Typography variant={'h5'}>
                {'قیمت لحظه ای'}
            </Typography>
            </Grid>
            <Grid container p={2} alignItems={'flex-start'}>
                <TextField type={'text'} onChange={handleSearch} variant={'outlined'} label={'جستجو...'}></TextField>
            </Grid>
            <Grid container p={2} alignItems={'flex-start'}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow sx={{height:64,background:"#e0e0e0"}}>
                        <TableCell align="center">درصدتغییرات</TableCell>
                        <TableCell align="center">تغییرات</TableCell>
                        <TableCell align="center">پایین ترین قیمت</TableCell>
                        <TableCell align="center"> بالاترین قیمت</TableCell>
                        <TableCell align="center">قیمت فعلی</TableCell>
                        <TableCell align="left"> ارز دیجیتال</TableCell>
                        <TableCell align="left">نماد</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {coinInfo.filter((row:any) => row.id.toUpperCase().includes(serch.toUpperCase())).map((row:any) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 },height:64 }}
                        >
                        <TableCell sx={{direction:'ltr' }} align="center">{row.price_change_percentage_24h}</TableCell>
                        <TableCell sx={{direction:'ltr' }} align="center">{row.price_change_24h} $</TableCell>
                        <TableCell sx={{direction:'ltr' }} align="center">{row.low_24h} $</TableCell>
                        <TableCell sx={{direction:'ltr' }} align="center">{row.high_24h} $</TableCell>
                        <TableCell sx={{direction:'ltr' }} align="center">{row.current_price} $</TableCell>
                        <TableCell sx={{direction:'ltr' }} align="left">{row.name}</TableCell>
                        <TableCell align="left"><img src={row.image} style={{height:48}}/></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default CoinTable
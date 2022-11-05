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
type Props = {}

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
    console.log(coinInfo)

  return (
    <Grid container direction={'column'} alignItems={'center'} sx={{background:"#e0e0e0",width:'100%'}}>
        <Grid container direction={'column'} alignItems={'center'} mt={16} p={2} sx={{background:"#fff",width:'80%',borderRadius:'10px'}} >
            <Grid container p={2} alignItems={'flex-start'}>
            <Typography variant={'h5'}>
                {'قیمت لحظه ای'}
            </Typography>
            </Grid>
            <Grid container p={2} alignItems={'flex-start'}>
                <TextField variant={'outlined'} label={'جستجو...'}></TextField>
            </Grid>
            <Grid container p={2} alignItems={'flex-start'}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        
                        <TableCell align="right">نشان کردن</TableCell>
                        <TableCell align="right">تغییرات</TableCell>
                        <TableCell align="right">نمودار</TableCell>
                        <TableCell align="right">قیمت فروش</TableCell>
                        <TableCell align="right">قیمت خرید</TableCell>
                        <TableCell align="right"> ارز دیجیتال</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {coinInfo.map((row:any) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        <TableCell align="right">{row.current_price}$</TableCell>
                        <TableCell align="right">
                            <Grid>
                            <Grid>
                                <img alt={''} src={`row.image`} />
                            </Grid>
                            <Grid>
                                {row.name}
                            </Grid>
                            </Grid>
                        </TableCell>
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
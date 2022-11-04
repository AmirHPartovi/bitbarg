import Grid from '@mui/material/Grid/Grid'
import React, { Children } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderLayout from './HeaderLayout'
type Props = {}

const mainLayout = (props: Props) => {
  return (
    <Grid>
        <HeaderLayout/>
        <main>
            <Outlet/>
                
        </main>
    </Grid>
  )
}

export default mainLayout
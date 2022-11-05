import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import {Suspense} from 'react';
import Layout from '../Components/Layout/mainLayout'

const Home= React.lazy(()=>import( '../Pages/Home'));
const CoinTable= React.lazy(()=>import( '../Pages/CoinTable'));


const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
        {
            index:true,
            element:(
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Home />
                </React.Suspense>
            )
        },
        {
            path:'/livePrice',
            element:(
                <React.Suspense fallback={<div>Loading...</div>}>
                    <CoinTable />
                </React.Suspense>
            )
        },
        
    ],
    }
]);
export default router
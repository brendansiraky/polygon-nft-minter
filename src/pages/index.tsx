import { useState } from 'react'

import Head from 'next/head'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { Banner } from '@/components/banner/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [quantity, setQuantity] = useState<number>(0)

    return (
        <>
            <Head>
                <title>Polygon NFT Minter</title>
                <meta
                    name="description"
                    content="Mint your very own NFT on the Polygon Network"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ToastContainer 
                hideProgressBar={false}
                autoClose={1000}
                position="top-left"
            />
            <Banner />
        </>
    )
}

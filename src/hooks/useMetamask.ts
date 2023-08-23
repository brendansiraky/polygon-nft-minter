import { useEffect, useState } from 'react'
import Web3 from 'web3'

import { convertFromHexDecimal, checkIsCorrectChain } from '../utility/helpers'

export const useMetamask = () => {
    const [selectedAccount, setSelectedAccount] = useState<null | string>(null)
    const [accountBalance, setAccountBalance] = useState<number | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('connect', connectWallet)
            window.ethereum.on('disconnect', disconnectWallet)
            window.ethereum.on('accountsChanged', () => window.location.reload())
            window.ethereum.on('chainChanged', () => window.location.reload())
        }
        // eslint-disable-next-line
    }, [])

    const connectWallet = async () => {
        try {
            if (!window.ethereum) throw new Error("No crypto wallet found")
            setLoading(true)

            // Get the hexChainId
            const hexChainId = await window.ethereum.request({ method: 'eth_chainId' })

            if (typeof hexChainId === 'string') {
                // Convert that into the chainId as number
                const chainId = Web3.utils.hexToNumber(hexChainId)

                // Check for whether we are on the correct network
                if (chainId && !checkIsCorrectChain(chainId)) throw new Error('Wrong Network')
            }

            // Finally, request the account
            const response = await window.ethereum.request({ method: 'eth_requestAccounts' }) as Array<string>
            if (response.length > 0) {
                accountChangedHandler(response[0])
                setLoading(false)
            }

        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message || 'Unknown Error')
            } else {
                setError('Unknown Error');
            }
            setLoading(false)
        }
    }

    const disconnectWallet = () => {
        setSelectedAccount(null)
        setAccountBalance(null)
    }

    const accountChangedHandler = (newAccount: string) => {
        setSelectedAccount(newAccount)
        setBalance(newAccount)
    }

    const setBalance = async (address: string) => {
        const balance = await window?.ethereum?.request({ method: 'eth_getBalance', params: [address, 'latest'] }) as string
        setAccountBalance(convertFromHexDecimal(balance))
    }

    return [
        connectWallet,
        disconnectWallet,
        selectedAccount,
        accountBalance,
        error,
        loading
    ] as const
}
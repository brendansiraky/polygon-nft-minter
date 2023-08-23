import Web3 from 'web3'

import { CONFIG } from '../../config'
import { chainId } from './types'

export const convertFromHexDecimal = (hex: string) => parseInt(hex, 16) * 0.000000000000000001

export const convertFromWei = (number: number) => Web3.utils.fromWei(number, 'ether')
export const converToWei = (number: number) => Web3.utils.toWei(number, 'ether')

export const getShortenedAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(address.length - 4)}`
}

const appChainId = 137
export const checkIsCorrectChain = (chainId: chainId) => chainId.toString() === appChainId.toString()
import { createAlchemyWeb3 } from "@alch/alchemy-web3"

import contract from '../abi/simple_contract_polygon_abi.json'
import { CONFIG } from '../../config'
import { AbiItem } from "./types"

export const web3 = createAlchemyWeb3('https://polygon-mainnet.g.alchemy.com/v2/X6clPlybl0BT4PZ10briy5a9RdToigue')

const contractABI: AbiItem[] = contract as AbiItem[]

export const simpleContract = new web3.eth.Contract(
    contractABI,
    '0xD2BDBC0b6B2fd88C46377546d565dC22088077E4' //CONFIG
)
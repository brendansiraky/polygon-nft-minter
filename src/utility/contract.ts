import { createAlchemyWeb3 } from "@alch/alchemy-web3"

import contract from '../abi/simple_contract_polygon_abi.json'
import { AbiItem } from "./types"

export const web3 = createAlchemyWeb3(process.env.NEXT_PUBLIC_ALCHEMY_HTTPS_KEY!)

const contractABI: AbiItem[] = contract as AbiItem[]

export const simpleContract = new web3.eth.Contract(
    contractABI,
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
)
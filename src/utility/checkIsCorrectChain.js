import 'dotenv/config'

import { chainLookup } from '../contants/chainLookup'

const chainName = process.env.REACT_APP_CHAIN_NAME;
export const checkIsCorrectChain = (chainId) => chainLookup[chainId] === chainName
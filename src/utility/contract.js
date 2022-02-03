import 'dotenv/config'
import { createAlchemyWeb3 } from "@alch/alchemy-web3"

import contractABI from '../abi/simple_contract_ropsten_abi.json'

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
export const web3 = createAlchemyWeb3(alchemyKey);

export const contractAddress = '0x222f2AEAa7dF1529cB05403E6F53829F6eA29aE3' // Ropsten

export const simpleContract = new web3.eth.Contract(
    contractABI,
    contractAddress
)



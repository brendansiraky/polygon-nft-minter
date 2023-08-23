import Web3 from "web3"
import { toast } from "react-toastify"

import { simpleContract } from "@/utility/contract"
// import { CONFIG } from "../../config"
import { useCost } from "./useCost"

export const useMint = () => {
    const [cost] = useCost()

    const mint = async (amount: number) => {
        try {
            // if (!selectedAddress) throw 'No Account Selected'
            const mintPromise = async () => {
                if (!cost) throw 'Could not retrieve cost'

                const transactionParameters = {
                    to: '0xD2BDBC0b6B2fd88C46377546d565dC22088077E4', // CONFIG
                    from: window.ethereum?.selectedAddress,
                    data: simpleContract.methods.mint(amount).encodeABI(),
                    value: "0x" + (cost * amount).toString(16)
                }
                // sign the transaction via Metamask
                // Could grab txtHash from this
                await window.ethereum?.request({
                    method: 'eth_sendTransaction',
                    params: [transactionParameters],
                })
            }

            toast.promise(mintPromise, {
                pending: 'Pending the transaction',
                success: 'Success, you should receive your mint shortly',
                error: 'Whoops, looks like something went wrong.'
            })
        } catch (error) {
            toast.error(error as string)
        }

    }

    return mint
}
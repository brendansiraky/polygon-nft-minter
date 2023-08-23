export const CONFIG = {
    ENVIRONMENT: {
        ALCHEMY_KEY: process.env.ALCHEMY_KEY!,
        CHAIN_ID: process.env.CHAIN_ID!,
        CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS!,
    },
    CONSTANTS: {
        CHAIN_ID_METHOD: 'eth_chainId',
        REQUEST_ACCOUNTS_METHOD: 'eth_requestAccounts',
        NO_WALLET_FOUND_ERROR: 'No crypto wallet found',
        WRONG_NETWORK_ERROR: 'Wrong Network',
        UNKNOWN_ERROR: 'Unknown Error',
    },
}
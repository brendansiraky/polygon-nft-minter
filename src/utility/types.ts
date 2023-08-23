export type chainId = number | bigint
export type Nullable<T> = T | null

export interface AbiItem {
    anonymous?: boolean;
    constant?: boolean;
    inputs?: AbiInput[];
    name?: string;
    outputs?: AbiOutput[];
    payable?: boolean;
    stateMutability?: StateMutabilityType;
    type: AbiType;
    gas?: number;
}

interface AbiInput {
    name: string;
    type: string;
    indexed?: boolean;
	components?: AbiInput[];
    internalType?: string;
}

interface AbiOutput {
    name: string;
    type: string;
	components?: AbiOutput[];
    internalType?: string;
}

type AbiType = 'function' | 'constructor' | 'event' | 'fallback' | 'receive';
type StateMutabilityType = 'pure' | 'view' | 'nonpayable' | 'payable';
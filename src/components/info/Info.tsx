import React, { useEffect, useState } from 'react'

import { simpleContract } from '../../utility/contract'
import { useGetMintedData } from '../../hooks/useGetMintedData'
import { convertFromWei } from '../../utility/helpers'
import { useCost } from '../../hooks/useCost'
import styles from './Info.module.css'

export const Info = () => {
    return (
        <div className={styles.info}>
            <Minted />
            <Cost />
            <Revealed />
            <Paused />
        </div>
    )
}
type SectionProps = {
    name: string
    value: string
    onFetch: () => void
    loading: boolean
}
const Section: React.FC<SectionProps> = ({ name, value, onFetch, loading }) => {
    return (
        <div className={styles.section}>
            <div onClick={onFetch} className={`${styles.refresh} ${loading ? styles.active : ''}`} />
            <h2>{name}: </h2>
            <span className={styles.value}>{value}</span>
        </div>
    )
}

const Cost = () => {
    const [cost, onGetCost, loading, error] = useCost()
    return (
        <Section
            name="Cost"
            value={error || (cost ? convertFromWei(cost) : '')}
            onFetch={onGetCost}
            loading={loading}
        />
    )
}

const Minted = () => {
    const [value, getMintedData, loading] = useGetMintedData()
    return (
        <Section
            name="Minted"
            value={value}
            onFetch={getMintedData}
            loading={loading}
        />
    )
}

const Revealed = () => {
    const [isRevealed, setIsRevealed] = useState('Unknown')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getRevealed()
    }, [])

    const getRevealed = async () => {
        try {
            setLoading(true)
            const isRevealed = await simpleContract.methods.revealed().call()
            setIsRevealed(isRevealed.toString())
            setLoading(false)
        } catch (error) {
            setIsRevealed('Unknown')
            setLoading(false)
        }
    }

    return (
        <Section
            name="Revealed"
            value={isRevealed}
            onFetch={getRevealed}
            loading={loading}
        />
    )
}

const Paused = () => {
    const [isPaused, setIsPaused] = useState('Unknown')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getPaused()
    }, [])

    const getPaused = async () => {
        try {
            setLoading(true)
            const isPaused = await simpleContract.methods.paused().call()
            setIsPaused(isPaused.toString())
            setLoading(false)
        } catch (error) {
            setIsPaused('Unknown')
            setLoading(false)
        }
    }

    return (
        <Section
            name="Paused"
            value={isPaused}
            onFetch={getPaused}
            loading={loading}
        />
    )
}
import React from 'react'

import styles from './WalletSettings.module.css'

type DisplayBoxProps = {
    onClick?: () => void
    text: string
    loading?: boolean
}

export const DisplayBox: React.FC<DisplayBoxProps> = ({ onClick, text, loading }) => {
    return (
        <div onClick={!loading ? onClick : () => {}} className={styles.displayBox}>{text}</div>
    )
}
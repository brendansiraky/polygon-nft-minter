import React from 'react'

import styles from './Button.module.css'

type ButtonProps = {
    text: string
    onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <div className={styles.buttonWrapper}>
            <div onClick={onClick} className={styles.button}>{text}</div>
        </div>
    )
}
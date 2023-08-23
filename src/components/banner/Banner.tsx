import { useState } from 'react'

import { useMint } from '@/hooks/useMint'
import { Settings } from './Settings'
import { Info } from '../info/Info'
import styles from './Banner.module.css'
import { Button } from '../button/ Button'

export const Banner = () => {
    const [quantity, setQuantity] = useState(0)
    const mint = useMint()

    return (
        <div className={styles.banner}>
            <Settings />
            <div>
                <h1 className={styles.h1}>Journey to 1.02M</h1>
                <div className={styles.inputContainer}>
                    <input
                        type='number'
                        value={quantity}
                        onChange={(event) => setQuantity(Number(event.target.value))}
                        placeholder='Enter Amount'
                        className={styles.input}
                    />
                </div>
                {<Button onClick={() => mint(quantity)} text="Mint" />}
            </div>
            <Info />
        </div>

    )
}
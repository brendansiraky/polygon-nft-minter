import React from 'react'

import { WalletSettings } from '../wallet/WalletSettings'
import styles from './Banner.module.css'

export const Settings = () => {
   return (
       <div className={styles.settings}>
            <WalletSettings />
       </div>
   )
}
import { useState } from 'react'
import useClipboard from '../../hooks/useClipboard'
import Image from 'next/image'

import show from '../../public/icons/open-eye.svg'
import hide from '../../public/icons/closed-eye.svg'

import styles from './Balance.module.css'


function Balance({ data }) {
  const [copyStatus, handleCopy] = useClipboard(data.bankInfo.result.cvu)
  const [isHidden, setIsHidden] = useState(false)

  const balance = data.balance.result.total.toLocaleString('de-DE')
  const cvu = data.bankInfo.result.cvu  

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>SALDO DISPONIBLE</h3>
      <h2 className={styles.balance}>
        {isHidden ? '****' : `$ ${balance}`}
        <span>
          <button
            onClick={() => setIsHidden(!isHidden)}
            className={styles.btn}>
            {isHidden
              ? <Image
                src={hide}
                alt='closed eye'
                aria-label='hide balance'
              />
              : <Image
                src={show}
                alt='open eye'
                aria-label='show balance'
              />
            }     
          </button>
        </span>
      </h2>
      <hr className={styles.horizontal_line} />
      <div className={styles.cvu_container}>
        <p>CVU: <strong>{cvu}</strong></p>
        <button
          className={styles.btn}
          aria-label='copy cvu'
          onClick={() => handleCopy()}
        >
          {copyStatus ? <span aria-label='success'>✔️</span> : 'Copiar'}
        </button>
      </div>
    </div>
  )
}

export default Balance

  
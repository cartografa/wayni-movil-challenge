import useClipboard from '../../hooks/useClipboard'

import styles from './Balance.module.css'

function Balance({ data }) {
  const [copyStatus, handleCopy] = useClipboard(data.bankInfo.result.cvu)

  // convierto el saldo con separadores de punto y coma.
  const balance = data.balance.result.total.toLocaleString('de-DE')
  const cvu = data.bankInfo.result.cvu  

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>SALDO DISPONIBLE</h3>
      <h2 className={styles.balance}>{`$ ${balance}`}</h2>
      <hr className={styles.horizontal_line} />
      <div className={styles.cvu_container}>
        <p>CVU: <strong>{cvu}</strong></p>
        <button
          className={styles.btn}
          onClick={() => handleCopy()}
        >
          {copyStatus ? <span role='success'>✔️</span> : 'Copiar'}
        </button>
      </div>
    </div>
  )
}

export default Balance

  
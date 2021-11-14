import { useRef } from 'react'
import useUser from '../../hooks/useUser'

import styles from './Balance.module.css'


function Balance() {
  const cvuRef = useRef()
  const { data, isLoading, isError } = useUser()

  if (isLoading) return 'Cargando...'
  if (isError) return 'Error :('
  
  // convierto el saldo con separadores de punto y coma.
  const balance = data.result.balance.result.total.toLocaleString('de-DE')

  const cvu = data.result.bankInfo.result.cvu

  // copio cvu
  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copiado! :)')
    }, (err) => {
      console.error('No se pudo copiar', err)
    })
  }
 
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>SALDO DISPONIBLE</h3>
      <h2 className={styles.balance}>{`$ ${balance}`}</h2>
      <hr className={styles.horizontal_line}/>
      <div className={styles.cvu_container}>
        <p>CVU: <strong ref={cvuRef}>{cvu}</strong></p>
        <button onClick={() => handleCopyToClipboard(cvuRef.current.innerText)}>Copiar</button>
      </div>
    </div>
  )
}


export default Balance
import useUser from '../../hooks/useUser'

import styles from './Balance.module.css'

function Balance() {
  const { data, isLoading, isError } = useUser()

  if (isLoading) return 'Cargando...'
  if (isError) return 'Error :('
  
  // console.log(data)
  const balance = data.result.balance.result.total

  if (!isLoading && !isError) {
    return (
      <div className={styles.card}>
        <h3 className={styles.title}>SALDO DISPONIBLE</h3>
        <h2 className={styles.balance}>{`$ ${balance}`}</h2>
        <hr className={styles.horizontal_line}/>
        <div className={styles.cvu_container}>
          <p>CVU: <b>{data.result.bankInfo.result.cvu}</b></p>
          <button>Copiar</button>
        </div>
      </div>
    )
  }


}

export default Balance
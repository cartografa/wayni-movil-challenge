import useUser from "../../hooks/useUser"
import { v4 as uuidv4 } from 'uuid';

import styles from './Transactions.module.css'

function Transactions() {
  const { data, isLoading, isError } = useUser()

  if (isLoading) return 'Cargando...'
  if (isError) return 'Error!'

  const activity = data.result.activity.result

  const handleDate = (APIdate, options = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  }) => {
    const date = new Date(APIdate)
    const normalizedDate = date.toLocaleString('es-AR', options).replaceAll('/', '-')
    return normalizedDate
  }

  const handleNumber = (APInumber, options = {
    minimumFractionDigits: 2
  }) => {
    return APInumber.toLocaleString('de-DE', options).replaceAll('.','')
  }

  const activityUI = (
    <ul className={styles.mov__list}>
      {activity.map(item => (
        <li key={uuidv4()} className={styles.mov__item}>
          <div className={styles.mov__date}>
            <p>{handleDate(item.date)}</p>
          </div>
          <div className={styles.mov__info}>
            <p>{item.info}</p>
            <p></p>
          </div>
          {item.credit > 0
            ? (<div className={styles.credit}>{`+ $${handleNumber(item.credit)}`}</div>)
            : (<div className={styles.debit}>{`- $${handleNumber(item.debit)}`}</div>)
          }
        </li>
      ))}
    </ul>
  )

  return (
    <div>
      <div className={styles.title__container}>
        <h3 className={styles.title}>Movimientos</h3>
      </div>
      {activityUI}
    </div>
  )
}

export default Transactions
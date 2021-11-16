import { v4 as uuidv4 } from 'uuid';
import { normalizeDate } from '../../utilities/utils';
import { normalizeNumber } from '../../utilities/utils';

import styles from './Transactions.module.css'

function Transactions({ data }) {
  const activity = data.activity.result

  function toDate(date) {
    return new Date(date)
  }
  // ordeno array de transacciones por fecha decreciente
  activity = activity.sort((a, b) => toDate(b.date) - toDate(a.date))

  const activityUI = (
    <ul className={styles.mov__list}>
      {activity.map(item => (
        <li key={uuidv4()} className={styles.mov__item}>
          <div className={styles.mov__date}>
            <p>{normalizeDate(item.date)}</p>
          </div>
          <div className={styles.mov__info}>
            <p>{item.info}</p>
            <p>Aut.</p>
          </div>
          {item.credit > 0
            ? (<div className={styles.credit}>{`+ $${normalizeNumber(item.credit)}`}</div>)
            : (<div className={styles.debit}>{`- $${normalizeNumber(item.debit)}`}</div>)
          }
        </li>
      ))}
    </ul>
  )

  return (
    <div>
      <div className={styles.title__container}>
        <h2 className={styles.title}>Movimientos</h2>
      </div>
        {activityUI}
    </div>
  )
}

export default Transactions
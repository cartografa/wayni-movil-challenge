import useUser from "../../hooks/useUser"
import { v4 as uuidv4 } from 'uuid';

import styles from './Transactions.module.css'

function Transactions() {
  const { data, isLoading, isError } = useUser()

  if (isLoading) return 'Cargando...'
  if (isError) return 'Error!'

  const activity = data.result.activity.result


  const activityUI = (
    <ul>
      {activity.map(item => (
        <li key={uuidv4()}>
          <div>
            <div>
              <p>{item.date}</p>
            </div>
            <div>
              <p>{item.info}</p>
              <p></p>
            </div>
            {item.credit > 0
              ? (<div className={styles.credit}>{`+ $${item.credit}`}</div>)
              : (<div className={styles.debit}>{`- $${item.debit}`}</div>)
            }
          </div>
        </li>
      ))}
    </ul>
  )

  return (
    <div>
      <div>
        <h3>Movimientos</h3>
      </div>
      {activityUI}
    </div>
  )
}

export default Transactions
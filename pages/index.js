import Balance from '../components/Balance/Balance'
import Actions from '../components/Actions/Actions'
import Transactions from '../components/Transactions/Transactions'

import styles from '../styles/MyWallet.module.css'

function MyWallet() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mi cuenta</h1>
      <Balance />
      <Actions />
      <Transactions />
    </div>
  )
}

export default MyWallet
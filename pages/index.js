import Balance from '../components/Balance/Balance'
import Actions from '../components/Actions/Actions'
import Transactions from '../components/Transactions/Transactions'

import useUser from '../hooks/useUser'

import styles from '../styles/MyWallet.module.css'


function MyWallet() {
  const { data, isLoading, error } = useUser()
  
  if (isLoading) return <div className={styles.container} />
  if (error) return <div className={styles.container}>Algo ha fallado :(</div>

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mi cuenta</h1>
      <Balance data={data.result}/>
      <Actions />
      <Transactions data={data.result}/>
    </div>
  )
}

export default MyWallet
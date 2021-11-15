import styles from './Actions.module.css'

import Image from 'next/image'
import cargar from '../../public/icons/cargar-dinero.svg'
import extraer from '../../public/icons/extraer-dinero.svg'
import transferir from '../../public/icons/transferencia.svg'

function Actions() {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <div className={styles.icon}>
          <Image src={cargar} alt='icon'/>
        </div>
        cargar<br/>dinero
      </button>
      <hr className={styles.vertical_line}/>
      <button className={styles.btn}>
        <div className={styles.icon}>
          <Image src={extraer} alt='icon' />
        </div>
        extraer<br/>dinero
      </button>
      <hr className={styles.vertical_line}/>
      <button className={styles.btn}>
        <div className={styles.icon}>
          <Image src={transferir} alt='icon'/>
        </div>
        transferir<br/>dinero
      </button>
    </div>
  )
}

export default Actions
import home from '../../public/icons/home.svg'
import transactions from '../../public/icons/movimientos.svg'
import card from '../../public/icons/tarjeta-credito.svg'
import wallet from '../../public/icons/wallet.svg'
import menu from '../../public/icons/menu.svg'

import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';

import styles from './TabBar.module.css'

function TabBar() {
  const icons = [home, transactions, card, wallet, menu]
  return (
    <div className={styles.tab__container}>
      <div />
      <nav>
        <ul className={styles.tab__list}>
          {icons.map(icon => (
            <li key={uuidv4()} className={styles.tab__item}>
              <button className={styles.tab__btn}>
                <Image src={icon} alt={`${icon} icon`}/>
              </button>
            </li>
          ))}
        </ul>
      </nav>
     </div> 
    )
}

export default TabBar
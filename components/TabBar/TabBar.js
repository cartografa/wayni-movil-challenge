import home from '../../public/icons/home.svg'
import transactions from '../../public/icons/movimientos.svg'
import card from '../../public/icons/tarjeta-credito.svg'
import wallet from '../../public/icons/wallet.svg'
import menu from '../../public/icons/menu.svg'

import homeAct from '../../public/icons/home_act.svg'
import transactionsAct from '../../public/icons/movimientos_act.svg'
import cardAct from '../../public/icons/tarjeta-credito_act.svg'
import walletAct from '../../public/icons/wallet_act.svg'

import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid';

import styles from './TabBar.module.css'
import { useState } from 'react'

function TabBar() {
  const icons = [home, transactions, card, wallet, menu]
  const activeIcons = [homeAct, transactionsAct, cardAct, walletAct, menu]

  // creo rutas para usar en el map
  const routes = Array(5).fill('/error')
  // seteo el segundo item como el default
  routes[1] = '/'

  // creo un array para seguir el estado de las tabs
  const active = Array(5).fill(false)
  active[1] = true
  const [isActive, setActive] = useState(active)


  function handleActive(idx) {
    // creo un nuevo array en falso
    const stateCopy = Array(5).fill(false)
    // pongo activo el id de la tab clickeada
    stateCopy[idx] = true

    // seteo el nuevo estado
    setActive(stateCopy)
  }

  return (
    <div className={styles.tab__container}>
      <nav>
        <ul className={styles.tab__list}>
          {icons.map((icon, idx) => (
            <li
              key={uuidv4()}
              className={styles.tab__item}>
              <div className={isActive[idx] ? styles.tab__line_active : styles.tab__line} />
              <Link href={routes[idx]}>
                <a
                  id={idx}
                  className={styles.tab__btn}
                  onClick={() => handleActive(idx)}
                >
                  <Image src={isActive[idx] ? activeIcons[idx] : icon} alt={`${icon} icon`}/>            
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
     </div> 
    )
}

export default TabBar
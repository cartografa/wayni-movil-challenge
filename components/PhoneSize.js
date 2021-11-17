import styles from './PhoneSize.module.css'

function PhoneSize({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default PhoneSize
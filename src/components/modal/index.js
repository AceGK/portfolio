import React from 'react'
import styles from './Modal.module.scss'

export default function Modal({ children, setModal }) {
  return (
    <>
    <div className={styles.container}>
    <Backdrop setModal={setModal} />
      <div className={styles.modal}>
        <div className={styles.close}>
          <button className="icon-xmark" onClick={() => setModal(false)}/>
        </div>
        <div className={styles.bodyWrapper}>
        <div className={styles.body}>
          {children}
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

function Backdrop({ setModal }) {
  return (
    <div
      className={styles.backdrop}
      onClick={() => setModal(false)}
    >
    </div>
  )
}
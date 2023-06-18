import React from 'react'
import Link from 'next/link'

import styles from 'styles/Modal.module.css'

type Props = {
  htmlText: string
  display: boolean
  closeEvent: (boolean) => void
}

const Modal = ({ htmlText, display, closeEvent }: Props) => (
  <div className={styles.background} style={{ display: display ? 'inherit' : 'none' }}
       onClick={() => closeEvent(false)}>
    <div className={styles.card} onClick={(e) => e.stopPropagation()}>
      <h1>作品一覧</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlText }}></div>
    </div>
  </div>
)

export default Modal

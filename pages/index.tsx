import { useRef } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'

import styles from 'styles/Index.module.css'

const IndexPage = () => {
  const imageWrapper = useRef<HTMLDivElement>()

  return (
    <Layout title="Home | トレフォイルサウンド">
      <div ref={imageWrapper} className={styles.image_wrapper}>
        <Image 
          src={'/mitsuba.svg'}
          alt='クローバー'
          fill={true}
          className={styles.mitsuba}
        />
        <p>トレフォイル<br/>サウンド</p>
      </div>
    </Layout>
  )
}

export default IndexPage

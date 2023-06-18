import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { client, type MemberRes } from '../libs/client'
import Layout from '../components/Layout'
import Modal from '../components/Modal'

export const getServerSideProps = async () => {
  try {
    const res = await client.get({ endpoint: 'member' })
    return {
      props: {
        members: res as MemberRes
      }
    }
  } catch {
    return {
      props: {
        members: null
      }
    }
  }
}

type Props = {
  members: MemberRes | null
}

const MembersPage = (props: Props) => {

  const [memberList, setMemberList] = useState(<></>)
  const [isModal, setIsModal] = useState(false)

  useEffect(() => {
    setMemberList(() => {
      if (!props.members) return <></>

      const members = props.members.contents.map((v, idx) => (
        <div className='card' key={idx}>
          <div>
            <h2>{v.name}</h2>
            <p>
              {v.profile}
            </p>
            <ul>
              { 
                v.accounts.map( (acc, idx) => (
                  <li key={idx}>
                    <a href={acc.url} target="_blank">{acc.title}</a>
                  </li>
                ))
              }
            </ul>
            <button onClick={() => setIsModal(v => !v)}>
              <b>Works</b>
            </button>
            <Modal htmlText={v.works} display={isModal} closeEvent={(b) => setIsModal(b) }/>
          </div>
        </div>
      ))
      return (
        <div>
          {members}
        </div>
      )
    })
  }, [isModal])

  return (
    <Layout title="メンバー | トレフォイルサウンド">
      <div className='contaner'>
        <h1>メンバー</h1>
        {memberList}
      </div>
    </Layout>
  )
}

export default MembersPage

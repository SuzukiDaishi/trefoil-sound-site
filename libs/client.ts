import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  apiKey: process.env.API_KEY || ''
})

export type Account = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  url: string
  title: string
}

export type Member = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  profile:string
  accounts: Account[]
  works: string
}

export type MemberRes = {
  contents: Member[]
  totalCount: number
  offset: number
  limit: number
}
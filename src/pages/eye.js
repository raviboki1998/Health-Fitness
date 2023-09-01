import React from 'react'
import db from '../utils/db.json'
import Article from '@/components/Article'

export default function eye() {

const data = db.eye


  return (
     <Article data={data} articles={data.articles}/>
  )
}

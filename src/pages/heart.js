import React from 'react'
import db from '../utils/db.json'
import Article from '@/components/Article'

export default function heart() {

const data = db.heart


  return (
     <Article data={data} articles={data.articles}/>
  )
}

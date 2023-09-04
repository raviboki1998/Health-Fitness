import React from 'react'
import db from '../utils/db.json'
import Article from '@/components/Article'

export default function HIV() {

const data = db.hiv


  return (
     <Article data={data} articles={data.articles}/>
  )
}

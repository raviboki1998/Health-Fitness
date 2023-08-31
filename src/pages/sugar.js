import React from 'react'
import db from '../utils/db.json'
import Article from '@/components/Article'

export default function sugar() {

const data = db.sugar


  return (
     <Article data={data} articles={data.articles}/>
  )
}

import React from 'react'
import db from '../utils/db.json'
import Article from '@/components/Article'

export default function skin() {

const data = db.skin


  return (
     <Article data={data} articles={data.articles}/>
  )
}

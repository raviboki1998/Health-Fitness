import React from 'react'
import db from '../utils/db.json'
import Article from '@/components/Article'

export default function teeth() {

const data = db.teeth


  return (
     <Article data={data} articles={data.articles}/>
  )
}

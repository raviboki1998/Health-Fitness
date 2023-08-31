import React from 'react'
import db from '../utils/db.json'
import Article from '@/components/Article'

export default function Obesity() {

const data = db.obesity


  return (
     <Article data={data} articles={data.articles}/>
  )
}

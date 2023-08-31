import React from 'react'
import db from '../utils/db.json'
import Article from '@/components/Article'

export default function Gastric() {

const data = db.gastric


  return (
     <Article data={data} articles={data.articles}/>
  )
}

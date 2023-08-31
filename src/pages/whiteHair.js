import React from 'react'
import db from '../utils/db.json'
import Article from '@/components/Article'

export default function whiteHair() {

const data = db.whitehair


  return (
     <Article data={data} articles={data.articles}/>
  )
}

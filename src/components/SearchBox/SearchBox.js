import React from 'react'
import classes from './SearchBox.module.scss'

export default function SearchBox({onChange}) {
  console.log(classes)
  return (
    <input className={classes.input} onChange={onChange} />
  )
}

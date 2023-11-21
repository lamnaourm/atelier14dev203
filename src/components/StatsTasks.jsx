import React from 'react'
import { useSelector } from 'react-redux'

export default function StatsTasks() {
    const taches = useSelector(state => state.tasks)

  return (
    <div>
        Nombre Taches : {taches.length} -
        Nombre terminès : {taches.filter(t => t.completed).length} - 
        Nombre non terminès : {taches.filter(t => !t.completed).length} 
    </div>
  )
}

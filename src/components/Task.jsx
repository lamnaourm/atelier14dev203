import React from 'react'
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deletetache, updatetache } from '../redux/ActionCreators';

export default function Task({tache}) {

    const dispatch = useDispatch()
  return (
    <div className='tache'>
        <h3 className={tache.completed ? 'barre':undefined}>{tache.task}</h3>
        <div>
            <button onClick={() => dispatch(updatetache(tache.id))}><GrUpdate /></button>
            <button onClick={() => dispatch(deletetache(tache.id))}><MdDelete /></button>
        </div>
    </div>
  )
}

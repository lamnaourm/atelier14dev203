import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addtache } from '../redux/ActionCreators';
import { useState } from 'react';

export default function AddTache() {

    const dispatch = useDispatch()
    const [tache, setTache] = useState('')
  return (
    <div className='add'>
        <input type="text" name="tache" id="tache" value={tache} onChange={(e) => setTache(e.target.value)}/>
        <button onClick={() => dispatch(addtache(tache)) }><IoIosAddCircle /></button>
    </div>
  )
}

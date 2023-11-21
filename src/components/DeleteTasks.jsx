import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteall, deletenontermines, deletetermines } from '../redux/ActionCreators';


export default function DeleteTasks() {

    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch(deleteall())}><MdDelete /> Tous</button>
        <button onClick={() => dispatch(deletetermines())}><MdDelete /> Terminés</button>
        <button onClick={() => dispatch(deletenontermines())}><MdDelete /> Non Terminés</button>
    </div>
  )
}

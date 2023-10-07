import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Todo(props) {
    return (
        <div className={'todo'}>
            <p className={'incompleted'}>{props.task}</p>
            <div>
                <FontAwesomeIcon className={'edit-icon'} icon={faPenToSquare} />
                <FontAwesomeIcon className={'delete-icon'} icon={faTrash} />
            </div>
        </div>
    )
}

export default Todo
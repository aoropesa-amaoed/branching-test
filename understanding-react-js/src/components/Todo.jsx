import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Todo() {
    return (
        <div className={'todo'}>
            <p className={'incompleted'}>Im gonna learn react!</p>
            <div>
                <FontAwesomeIcon className={'edit-icon'} icon={faPenToSquare} />
                <FontAwesomeIcon className={'delete-icon'} icon={faTrash} />
            </div>
        </div>
    )
}

export default Todo
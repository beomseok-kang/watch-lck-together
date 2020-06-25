import React, { useState } from 'react';
import './Chatter.scss';
import { useChatsDispatch } from './ChatContext';

function Chatter() {

    const [value, setValue] = useState('');
    const dispatch = useChatsDispatch();
    
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            chat: value
        })
        // THINGS TO DO AFTER SUBMIT
        setValue('');
    }



    return (
        <div className="chatter-wrapper">
            <form onSubmit={onSubmit}>
                <input placeholder="채팅을 입력하세요." onChange={onChange} value={value}/>
                <button className="submit" onClick={onSubmit}>전송</button>   
            </form>  
        </div>
    );
}

export default Chatter;
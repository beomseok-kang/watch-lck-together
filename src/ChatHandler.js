import React from 'react';
import './ChatHandler.scss'


function ChatHandler ({ children, left, top }) {

    const style = {
        position: 'absolute',
        top,
        left
    } 
    
    return <div className="chat" style={style}>{children}</div>;

}

export default ChatHandler;
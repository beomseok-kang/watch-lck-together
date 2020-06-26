import React, { useEffect, useState } from 'react';
import './ChatHandler.scss'


function ChatHandler ({ children, id, left, top }) {

    const [showComponent, setShowComponent] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowComponent(false);
        }, 8000);
        return () => clearTimeout(timer);
    }, []);

    const style = {
        position: 'absolute',
        top,
        left
    } 
    
    return showComponent
        ? <div className="chat" style={style}>{children}</div>
        : null;
}

export default ChatHandler;
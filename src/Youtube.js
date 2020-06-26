import React, { useState, useEffect } from 'react';
import './Youtube.scss'
import { getWindowDimensions } from './ChatContext'
import ChatHandler from './ChatHandler';
import { useChatsState } from './ChatContext';
import { useChatsDispatch } from './ChatContext';

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
}

function Youtube({ team }) {

    const youtubeUrl = "https://www.youtube.com/embed/dccezgS8jf0";

    const state = useChatsState();

    const {height, width} = useWindowDimensions();
    const heightReal = height - 160;

    const dispatch = useChatsDispatch();

    useEffect(() => {
        dispatch({
            type: 'CLEAR',
        });
    }, [dispatch]);

    const style = {
        width: width,
    }
    if(heightReal < (0.5625 * width)) {
        style.width = heightReal / 0.5625;
    }

    return (
        <div className="video" style={style}>
            <div className="video-ratio">
                <iframe
                    title="Youtube"
                    width="1903" height="768"
                    src={`${youtubeUrl}?autoplay=1`}
                    frameBorder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture">
                </iframe>
            </div>
            {state.map(chat =>
                <ChatHandler top={chat.top} left={chat.left}>
                    {chat.text}
                </ChatHandler>
            )}
        </div>
    );
}

export default Youtube;
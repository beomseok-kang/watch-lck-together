import React from 'react';
import Youtube from './Youtube';
import Chatter from './Chatter';
import './App.scss';
import ChatProvider from './ChatContext';

function App() {
  return (
    <>
      <ChatProvider>
        <header>
          #함께 봐요&nbsp;&nbsp;&nbsp;&nbsp;#LCK
        </header>
        <Youtube />
        <Chatter />
      </ChatProvider>
    </>
  );
}

export default App;

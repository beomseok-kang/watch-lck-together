import React, { useReducer, createContext, useContext } from 'react';

export function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    }
};

const chats = [];

function chatsReducer (state, action) { 
    const {height, width} = getWindowDimensions();
    const heightReal = height - 160;

    const standardWidth = heightReal < (0.5625 * width) ? heightReal / 0.5625 : width;
    const standardHeight = standardWidth * 0.5625;
    const left = (heightReal < (0.5625 * width) ? (width-standardWidth)/2 : 0) + standardWidth * Math.random();
    const top = 80 + standardHeight * Math.random();

    switch (action.type) {
        case 'CREATE':
            return state.concat({
                text: action.chat,
                left,
                top,
            });
        case 'CLEAR':
            return [];
        default:
            throw new Error(`Unhandled Action Type: ${action.type}`);
    }
}

const ChatsStateContext = createContext();
const ChatsDispatchContext = createContext();

export default function ChatProvider ({ children }) {
    const [state, dispatch] = useReducer(chatsReducer, chats);

    return (
        <ChatsStateContext.Provider value={state}>
            <ChatsDispatchContext.Provider value={dispatch}>
                {children}
            </ChatsDispatchContext.Provider>
        </ChatsStateContext.Provider>
    );
}

export function useChatsState () {
    const context = useContext(ChatsStateContext);
    if (!context) {
        throw new Error('Cannot find ChatsProvider');
    }
    return context;
}
export function useChatsDispatch () {
    const context = useContext(ChatsDispatchContext);
    if (!context) {
        throw new Error('Cannot find DispatchContext');
    }
    return context;
}
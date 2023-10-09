import React from 'react'
import { MultiChatWindow, MultiChatSocket, useMultiChatLogic } from 'react-chat-engine-advanced'

const Chat = (props) => {
    const chatProps = useMultiChatLogic('6e26ec70-5960-4aa2-b18a-1083b7abd097', 
    props.user.username, 
    props.user.secret)
  return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
    </div>
  )
}

export default Chat
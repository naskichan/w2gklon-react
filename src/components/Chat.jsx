import React from 'react'
import styled from '@emotion/styled'

function Chat() {

    return (
        <ChatWrapper>
            <Text>I am the chat</Text>
        </ChatWrapper>
    )
}

const ChatWrapper = styled.div`
    width: 20%;
`
const Text = styled.h1`

`

export default Chat
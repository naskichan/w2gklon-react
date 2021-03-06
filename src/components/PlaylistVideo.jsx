import React, { useState } from "react"
import styled from "@emotion/styled"
import { useStore } from 'react-redux'


function PlaylistVideo({video}) {
    
    const [isSelected, setIsSelected] = useState(false)
    const store = useStore()
    const thumbnailsrc = `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`

    function dispatchVideoChange(video) {
        
        console.log('i was clicked', video.title)
        setIsSelected(true)
        store.dispatch({
            type: 'SET_CURRENT_VIDEO',
            video: video
        })
    }
    

    return(
        <Content isSelected={isSelected} onClick={() => dispatchVideoChange(video)}>
            <Thumbnail src={thumbnailsrc} alt='Thumbnail of video'/>
            <InfoWrapper>
                <Text>{video.title}</Text>
                <Text>by {video.channelTitle}</Text>
            </InfoWrapper>
        </Content>
    )
}

const Thumbnail = styled.img`
    width: 30%;
    object-fit: cover;
    display: block;
    min-width: 2rem;
    `
const Content = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    margin: 0.3rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    :hover {
        background-color: #e6e6e6;
        transition: background-color .2s ease-in-out;
    }
    background-color: ${p => p.isSelected? '#e6e6e6': null};
    
`
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0rem 0rem 0rem 1rem;
`

const Text = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0.5rem;
    font-size: 1vw;
`

export default PlaylistVideo
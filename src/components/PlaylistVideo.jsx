import React from "react";
import styled from "@emotion/styled";


function PlaylistVideo({video}) {
    const thumbnailsrc = `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`
    console.log(thumbnailsrc)

    return(
        <Content>
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
    `
const Content = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0.3rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    
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
    font-size: 0.8rem;
`

export default PlaylistVideo
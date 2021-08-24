import React, {useState} from "react";
import styled from "@emotion/styled";
import YouTube from "react-youtube";
import { useStore} from 'react-redux'

function Player() {

    const store = useStore()
    //initial state
    let [video, setVideo] = useState(store.getState())

    function changeVideo() {
        setVideo(store.getState())
    }

    store.subscribe(changeVideo)
    // Saving in this file makes the player go undefined
    let player

    function playerStateChanged(e) {
        player = e.target;
        if(player.getPlayerState() === 5) {
            player.playVideo()
        }

    }

    function handleClick() {
        if(player.getPlayerState() === 1) {
            player.pauseVideo()
        } else {
            player.playVideo()
        }
      }

    const playerOpts = {
        playerVars: {
            autoplay: 0,
            controls: 0
        }
    }
    return (
        
        <Wrapper>
            <Title>{video.title}</Title>
            <CustomYouTube videoId={video.id} opts={playerOpts} onStateChange={(e) => playerStateChanged(e)}></CustomYouTube>
            <Button onClick={handleClick}>Me is text</Button>
        </Wrapper>
    )
}

const CustomYouTube = styled(YouTube)`
    width: 100%;
    height: 32rem;

`
const Button = styled.button`
    height: 2rem;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 48rem;
    flex-grow: 1;
`
const Title = styled.h1`
    font-size: 2rem;
`

export default Player
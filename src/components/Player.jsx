import React, { useContext } from "react";
import styled from "@emotion/styled";
import YouTube from "react-youtube";
import VideoContext from '../contexts/VideoContext'

function Player() {

    const [currentVideo, setCurrentVideo] = useContext(VideoContext)
    // Saving in this file makes the player go undefined
    let player

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
            <VideoContext.Consumer>
                <YouTube videoId={currentVideo.id} opts={playerOpts} onReady={(e) => player = e.target}></YouTube>
            </VideoContext.Consumer>
            <Button onClick={handleClick} />
        </Wrapper>
    )
}

const Button = styled.button`

`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

export default Player
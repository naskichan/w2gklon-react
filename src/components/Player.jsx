import React from "react";
import styled from "@emotion/styled";
import YouTube from "react-youtube";

function Player({video}) {

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
            <Title>{video.title}</Title>
            <CustomYouTube videoId={video.id} opts={playerOpts} onReady={(e) => player = e.target}></CustomYouTube>
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
`
const Title = styled.h1`
    font-size: 2rem;
`

export default Player
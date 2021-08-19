import React, { useContext } from "react";
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
            <YouTube videoId={video.id} opts={playerOpts} onReady={(e) => player = e.target}></YouTube>
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
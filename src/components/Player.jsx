import React from "react";
import styled from "@emotion/styled";
import YouTube from "react-youtube";

function Player({video}) {
    return (
        <Wrapper>
            <YouTube videoId={video.id}></YouTube>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

export default Player
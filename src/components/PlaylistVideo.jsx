import React from "react";
import styled from "@emotion/styled";


function PlaylistVideo({video}) {
    const thumbnailsrc = `https://i.ytimg.com/vi/${video}/mqdefault.jpg`
    console.log(thumbnailsrc)

    return(
        <div>
            <p>Video title</p>
            <p>Video Length</p>
            <img src={thumbnailsrc} alt='Thumbnail of video'/>
        </div>
    )
}

const Thumbnail = styled(Image)`
    width: 50%;
`

export default PlaylistVideo
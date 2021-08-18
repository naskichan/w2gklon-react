import React from "react";
import styled from "@emotion/styled";
import PlaylistVideo from "./PlaylistVideo";


function Playlist({playlists}) {
    console.log(playlists)
    return(
        <div>
            {playlists.map((playlist) => {
                return (
                    <>
                        <Title>
                            {playlist.name}
                        </Title>
                        <VideosWrapper>
                            {playlist.videos.map((video) => {
                                return(
                                    <div>
                                        <PlaylistVideo video={video} />
                                    </div>
                                )
                            })}
                        </VideosWrapper>
                    </>
                )
            })}
        </div>
    )
}

const Title = styled.h2`
    font-size: 1rem;
`
const VideosWrapper = styled.div`
    display: flex;
`

export default Playlist
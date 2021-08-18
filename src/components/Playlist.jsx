import React from "react";
import styled from "@emotion/styled";
import PlaylistVideo from "./PlaylistVideo";


function Playlist({playlists}) {
    let selected = 'spy'

    console.log('playlists', playlists)
    return(
        <>    
            {playlists.map((playlist) => {
                
                if(playlist.uuid === selected) {
                    return (
                        <PlaylistContent>
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
                        </PlaylistContent>
                    )
                }
                return (<> </>)
            })}
        </>
    )
}
const PlaylistContent = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 8px 7px 23px 1px rgba(0,0,0,0.2); 
    box-shadow: 8px 7px 23px 1px rgba(0,0,0,0.2);
`
const Title = styled.h2`
    font-size: 1rem;
`
const VideosWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default Playlist
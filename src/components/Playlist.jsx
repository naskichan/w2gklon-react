import React, { useState } from "react";
import styled from "@emotion/styled";
import PlaylistVideo from "./PlaylistVideo";


//TODO: Component requests api everytime playlist is updated, consider this:
// https://stackoverflow.com/questions/52929417/fetch-data-only-once-per-react-component/52931126
function Playlist({playlists}) {
    let [selected, setSelected] = useState('default');
    return(
        <PlaylistContent>   
            <Selector onChange={(e) => {setSelected(e.target.value)}}>
                {playlists.map((playlist) => {
                    return(
                        <option value={playlist.uuid}>{playlist.name}</option>
                    )
                })}
            </Selector>
            {playlists.map((playlist) => {

                if(playlist.uuid === selected) {
                    return (
                        <ScrollWrapper>
                            <VideosWrapper>
                                {playlist.videos.map((video) => {
                                    return(
                                        <PlaylistVideo video={video} />
                                    )
                                })}
                            </VideosWrapper>
                        </ScrollWrapper>
                    )
                }
                return (<> </>)
            })}
        </PlaylistContent>
    )
}
const Selector = styled.select`
    margin: 1rem;
`
const PlaylistContent = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    margin: 5rem 1rem 1rem 1rem;
    height: 100%;
    -webkit-box-shadow: 8px 7px 23px 1px rgba(0,0,0,0.2); 
    box-shadow: 8px 7px 23px 1px rgba(0,0,0,0.2);
    width: 20%;
    height: calc(1.5*360px);
`
const ScrollWrapper = styled.div`
    overflow: scroll;
`

const VideosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.1rem;
`

export default Playlist
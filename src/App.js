import { useState, React, useEffect, useContext } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import Playlist from './components/Playlist'
import Player from './components/Player'
import { io } from 'socket.io-client'


function App() {
  
  const [ playlists, setPlayLists ] = useState([])
  const [ currentVideo, setCurrentVideo] = useState(
    {
      id: "V1BoiJhJhaw"
    })
  
  
  useEffect( () => {
    
    async function fetchPlaylists() {
      return await axios('http://localhost:3001/api/playlists')
      
    }
    fetchPlaylists().then((res) => {
      setPlayLists(res.data)
    })
    // eslint-disable-next-line
  }, [URL]) 

  return (
    <Main>
      <ContentWrapper>
          <Playlist playlists={playlists} onCurrentVideoChange={data => setCurrentVideo(data)}/>
          <Player video={currentVideo}/>
      </ContentWrapper>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1 3;
`

export default App;

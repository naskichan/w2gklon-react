import { useState, React, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import Playlist from './components/Playlist'
import Player from './components/Player'
import { io } from 'socket.io-client'


function App() {

  const debugvideo = {
    id: 'DhOv8OoPBUI'
  }
  let [video, setVideo] = useState(debugvideo)
  let [playlists,setPlayLists] = useState([])
  let [socket, setSocket] = useState(null)

  
  
  useEffect( () => {
    
    const mySocket = io('http://localhost:3001')
    setSocket(mySocket)
    async function fetchPlaylists() {
      console.log('fetching')
      return await axios('http://localhost:3001/api/playlists')
      
    }
    fetchPlaylists().then((res) => {
      console.log('recieved stuff', res.data)
      setPlayLists(res.data)
    })
    return () => mySocket.close();
    // eslint-disable-next-line
  }, [URL]) 

  return (
    <Main>
      <ContentWrapper>
      <Playlist playlists={playlists}/>
        <Player video={video}/>
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

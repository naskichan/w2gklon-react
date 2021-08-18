import { useState, React, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import Playlist from './components/Playlist'
import Player from './components/Player'


function App() {


  let [playlists,setPlayLists] = useState([]);
  
  useEffect( () => {
    async function fetchPlaylists() {
      console.log('fetching')
      return await axios('http://localhost:3001/api/playlists')
      
    }
    fetchPlaylists().then((res) => {
      console.log('recieved stuff', res.data)
      setPlayLists(res.data)
    })
    // eslint-disable-next-line
  }, [URL]) 

  return (
    <Main>
      <ContentWrapper>
      <Playlist playlists={playlists}/>
        <Player />
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

import { useState, React, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import Playlist from './components/Playlist'
import Player from './components/Player'
import { io } from 'socket.io-client'
import { Provider } from 'react-redux'
import { provideStore } from './redux/createReduxStore'
import Chat from './components/Chat'


function App() {
  
  const store = provideStore()
  const [ playlists, setPlayLists ] = useState([])
  
  
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
        <Provider store={store}>
            <Playlist playlists={playlists}/>
            <Player/>
            <Chat />
        </Provider>
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
  height: 90vh;
`

export default App;

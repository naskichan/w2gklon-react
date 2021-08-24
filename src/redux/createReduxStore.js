import { createStore } from "redux";

const defaultState = {
    id: "V1BoiJhJhaw",
    title: "🎵 Kawaii Future Bass & EDM Mix 🎵 Best Kawaii Music ʕ•ᴥ•ʔ",
    channelTitle: "Electric Sounds"
  }

function currentVideo(state = defaultState, action) {
    switch(action.type) {
        case 'SET_CURRENT_VIDEO':
            console.log('setting current video')
            state = action.video
            return state
        default:
            return state
    }
}

const store = createStore(currentVideo, defaultState)

export function provideStore() {
    return store
}
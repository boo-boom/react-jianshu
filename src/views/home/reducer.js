import axios from 'axios';

const stateDefault = {
    topics: []
}

export function home(state=stateDefault, action) {
    switch(action.type) {
        case 'get_topics':
            return {...state, topics: action.topics}
        default:
            return state;
    }
}

export function getTopics() {
    const action = {
        type: 'get_topics'
    }
    return dispatch => {
        axios.get('/data/topics.json').then(res => {
            if(res.status === 200) {
                action.topics = res.data
                dispatch(action)
            }
        })
    }
}


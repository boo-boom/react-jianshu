import axios from 'axios'

const stateDefault = {
    focused: false,
    mouseIn: false,
    searchHot: [],
    page: 1,
    pageTotal: 1,
    pageSize: 10,
}

// 使用thunk可以传入一个函数，该函数必须return一个对象
const getSearchHot = function() {
    return dispatch => {
        axios.get('/data/searchHot.json').then(res => {
            dispatch({
                type: 'search_hot',
                searchHot: res.data.list,
                totalPage: Math.ceil(res.data.list.length / 10),
            })
        })
    }
}

// 根据状态改变state
export function header(state=stateDefault, action) {
    switch(action.type) {
        case 'search_foucs': 
            return {...state, focused: action.focused}
        case 'search_blur': 
            return {...state, focused: action.focused}
        case 'mouse_enter':
            return {...state, mouseIn: action.mouseIn}
        case 'mouse_leave':
            return {...state, mouseIn: action.mouseIn}
        case 'search_hot':
            return {...state, searchHot: action.searchHot, totalPage: action.totalPage}
        case 'change_page':
            return {...state, page: action.page}
        default:
            return state
    }
}

export function searchFoucs(searchHot) {
    const action = {
        type: 'search_foucs',
        focused: true,
    }
    return dispatch => {
        dispatch(action)
        searchHot.length === 0 && dispatch(getSearchHot())
    }
}

export function searchBlur() {
    const action = {
        type: 'search_blur',
        focused: false,
    }
    return dispatch => {
        dispatch(action)
    }
}

export function mouseEnter() {
    const action = {
        type: 'mouse_enter',
        mouseIn: true,
    }
    return dispatch => {
        dispatch(action)
    }
}

export function mouseLeave() {
    const action = {
        type: 'mouse_leave',
        mouseIn: false,
    }
    return dispatch => {
        dispatch(action)
    }
}

export function changePage(page, pageTotal, icon) {
    const action = {
        type: 'change_page',
        page: page < pageTotal ? page + 1 : 1,
    }
    const originAngle = parseInt(icon.style.transform.replace(/[^0-9]/ig, ''), 10) || 0
    icon.style.transform = `rotate(${originAngle + 360}deg)`
    return dispatch => {
        dispatch(action)
    }
}
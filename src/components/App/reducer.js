const initialState = {
    data: {
        name: 'test'
    }
}

export default function (state = initialState, action) {
    if (action.type === 'SET_DATA') {
        return {
            ...state,
            data: action.data
        }
    }

    return state;
}
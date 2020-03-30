const initialState = {
    data: {
        name: 'test'
    },
    isServerError: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.data
            }
    
        default:
            return state;
    }

}
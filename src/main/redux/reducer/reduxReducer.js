const initState = {
    backgroundColor: '#ffd09f'
};
export const reduxReducer = (state = initState,action) => {
    return {
        ...state,
        backgroundColor: action.backgroundColor
    }
};

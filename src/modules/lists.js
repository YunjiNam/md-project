const GET_LIST = 'lists/GET_LIST';

export const getList = list => ({
    type: GET_LIST,
    lists: list
});

const initialState = {
    lists: []
}

export default function lists(state = initialState, action) {
    switch (action.type) {
        case GET_LIST:
            return state.concat(action.lists);
        default:
            return state;
    }
}
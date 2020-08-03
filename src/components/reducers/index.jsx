// src/js/reducers/index.js
const initialState = 0;

function reducer(state = initialState, action) {
    return action.value;
}

export default reducer;

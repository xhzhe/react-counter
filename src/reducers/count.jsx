const count = (state = 0, action) => {
    switch (action.type) {
        case "CHANGE":
            return action.value
        default:
            return state
    }
}
export default count;
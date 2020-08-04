const total = (state = 0, action) => {
    switch (action.type) {
        case "ADD":
            return state + 1
        case "SUB":
            return state - 1
        case "EMPTY":
            return 0
        case "CHANGE":
            return action.value
        default:
            return state
    }
}
export default total;
import CounterGroup from "../components/CounterSet";
import {connect} from "react-redux";
import {change, setTotal,} from "../actions";

const mapStateToProps = state => {
    return {
        total: state.total,
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTotal: (value) => {
            dispatch(setTotal(value))
        },
        changeCount: (value) => {
            dispatch(change(value))
        }
    }
}

const CounterGroupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterGroup)

export default CounterGroupContainer;
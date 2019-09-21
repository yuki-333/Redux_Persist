 import App from "../components/App";
 import { connect } from "react-redux";

 import { plus, minus, addTodo } from '../actions'


const mapStateToProps = state => {
    return {
        number: state.number,
        day: state.day,
        title: state.title,
        todo: state.todos.list,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        plus: num => {
            dispatch(plus(num));
        },
        minus: num => {
            dispatch(minus(num));
        },
        onAddToDo(todo) {
            dispatch(addTodo(todo))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



export const plus = num => {
    return {type: "PLUS", payload: {num: num} };
};


export const minus = num => {
    return {type: "MINUS", payload: {num: num} };
};

export function addTodo(todo) {
    return {
        type: 'ADD_TO_DO',
        todo
    }
}
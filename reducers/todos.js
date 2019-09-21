const initialState = {
    list: '初期値'
}

export function todos( state = initialState, action) {
    switch(action.type) {
        case "ADD_TO_DO":
            return  {
                list: action.todo
            };
        default:
            return state;
    }
}

export default todos;


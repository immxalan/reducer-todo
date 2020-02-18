export const initialState = { 
    todo: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },{
        item: 'Practice with reducers',
        completed: false,
        id: 3892987590
    },{
        item: 'Make a project about reducers',
        completed: false,
        id: 3892987591
    }
]}

export const todoListReducer = (state, action) => {
    console.log(action);
    switch (action.type){
        // WHAT/HOW MANY ACTONS(UI EVENTS) ARE NEEDED FOR TODO LIST? 3
        // 1. TOGGLING COMPLETED = ADDING CLASSNAME TO ITEM
        // 2. ADDING NEW TODO ITEM
        // 3. CLEARING COMPLETING TODO ITEM
        case "ADD_TODO":
            return {
                ...state, //This is your initial state/array of todo
                        //You are adding a new todo (right below) to the state/array
                todo:[
                    ...state.todo,
                    {item: action.text,
                    completed: false,
                    id: Date.now()}
                ]
            }
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todo: state.todo.map(todo => todo.id === action.id // compare your state/array to your toggled items array, for any comparisons that return === between the two  map a new array/state with the "completed" boolean property set to the opposite
                    ?{
                        ...todo,
                        completed: !todo.completed
                    }
                    : todo)
            }
        case "CLEAR_COMPLETED":
            return{
            ...state,
            todo: state.todo.filter(todo => !todo.completed) //filter out any items whose completed propety is true
            }
        default:
            return state;
    }
}
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_COURSE":
            return Object.assign({}, state, { course: action.course });
            //return [...state, Object.assign({}, course: action.course )]
            
        default:
            return state;
    }
}

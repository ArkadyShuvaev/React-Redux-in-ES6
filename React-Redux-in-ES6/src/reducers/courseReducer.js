import * as CreateActions from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case CreateActions.CREATE_COURSE:
            //return Object.assign({}, state, { course: action.course });
            return [...state, Object.assign({}, action.course)];

        case CreateActions.LOAD_COURSES_SUCCESS:
            return action.courses;

        default:
            return state;
    }
}

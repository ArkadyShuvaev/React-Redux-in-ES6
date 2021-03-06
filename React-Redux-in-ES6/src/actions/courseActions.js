import * as CreateActions from "./actionTypes";
import CourseApi from "../api/mockCourseApi";
import * as AjaxStatusActions from "./ajaxStatusActions";

function loadCoursesSuccess(courses) {
    return { type: CreateActions.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
    return { type: CreateActions.CREATE_COURSE_SUCCESS, course };
}

function updateCourseSuccess(course) {
    return { type: CreateActions.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
    
    return (dispatch) => {
        dispatch(AjaxStatusActions.beginAsynCall());

        return CourseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course) {
    // getState is for the cases where you are wanting to access
    // Redux store and get particular pieces of state w/o having
    // to pass it in as a parameter
    
    return (dispatch, getstate) => {
        dispatch(AjaxStatusActions.beginAsynCall());

        return CourseApi.saveCourse(course).then(savedCourse => {
            if (course.id) {
                dispatch(updateCourseSuccess(savedCourse));
            } else {
                dispatch(createCourseSuccess(savedCourse));
            }
        }).catch(error => {
            dispatch(AjaxStatusActions.ajaxCallError(error));
            throw (error);
        });
    };
}

import * as ActionTypes from "./actionTypes";

export function beginAsynCall() {
    return { type: ActionTypes.BEGIN_ASYNC_CALL };
}

export function ajaxCallError() {
    return { type:ActionTypes.AJAX_CALL_ERROR }
}

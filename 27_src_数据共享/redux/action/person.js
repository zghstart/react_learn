import {ADD_PERSON} from "../constant";

export function addPersonAction(data) {
    return {
        type:ADD_PERSON,
        data
    }
}
import { types } from "../types/types"

/* export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}  ES LO MISMO QUE : (Un único argumento el return) */

export const login = (uid, displayName) => 
(     {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
)

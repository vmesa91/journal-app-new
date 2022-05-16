
import { types } from "../types/types"
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
/* export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}  ES LO MISMO QUE : (Un único argumento el return) */


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch( login(password, email) )
        }, 3500);
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ( { user } ) => {
                console.log(user.email)
                console.log(user.uid)
                console.log(user.displayName)
                dispatch(login( user.uid, user.displayName ))
            } ) 
    }
}

export const login = (uid, displayName) => 
(     {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
)

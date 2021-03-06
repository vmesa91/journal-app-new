
import { types } from "../types/types"
import Swal from 'sweetalert2'
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch ( startLoading() )

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( ( { user } ) => {
            dispatch( login(user.uid, user.displayName) )
            dispatch ( finishLoading() )
        })
        .catch( e => {
            console.log(e)
            dispatch ( finishLoading() )
            Swal.fire('Error', e.message, 'error')
        }) 
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

export const startRegisterWithEmailPasswordName = ( email, password, name) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async( { user } ) => {
            await user.updateProfile( { displayName: name } )
            dispatch(login( user.uid, user.displayName ))
        } )
        .catch( e => {
            console.log(e)
            Swal.fire('Error', e.message, 'error')
        }) 
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
       await firebase.auth().signOut()
       dispatch(logout())
    }
}

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

export const logout = () => ({
    type: types.logout
})

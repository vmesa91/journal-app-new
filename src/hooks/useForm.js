import { useState } from "react"


const useForm = ( initialState = {} ) => {
 
    const [values, setValue] = useState(initialState)

    const reset = () => {
        setValue(initialState)
    }

    const handleInputChange = ({target}) => {
        setValue({
            ...values,
            //Extraes el valor, es lo mismo que colocar : 
            // name: target.value o email: target.value
            [target.name]: target.value
          })
    }

    return [values, handleInputChange, reset]
}

export default useForm
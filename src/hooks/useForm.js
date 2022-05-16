import { useState } from "react"


const useForm = ( initialState = {} ) => {
 
    const [values, setValue] = useState(initialState)
    //console.log(values)

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
          //console.log(values)
    }

    return [values, handleInputChange, reset]
}

export default useForm
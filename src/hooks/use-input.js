import { useState } from "react";


const useInput = (whenValid) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isValueValid,setIsValueValid] = useState(false)
    const [isInputValid,setIsInputValid] = useState(true)

    const onChangeHandler = (event) => {
        setIsInputValid(true)
        setEnteredValue(event.target.value)
        if(whenValid(event.target.value)) setIsValueValid(true)
        else setIsValueValid(false)
    }
    
    const onBlurHandler = () => {
        setIsInputValid(isValueValid)
    }
    
    return{
        enteredValue:enteredValue,
        isValueValid:isValueValid,
        isInputValid:isInputValid,
        onChangeHandler:onChangeHandler,
        onBlurHandler:onBlurHandler
    }
}
export default useInput;

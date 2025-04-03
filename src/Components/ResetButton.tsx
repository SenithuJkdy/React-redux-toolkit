import { IncDecServices } from "../reducers/IncDecSlice"
import { useAppDispatch } from "../stateStore"

const ResetButton = () => {
    const dispatch = useAppDispatch()

    const resetButtonClickHandler = ( e: React.MouseEvent<HTMLButtonElement> ) =>{
        e.preventDefault()
        dispatch(IncDecServices.actions.resetValue())
    }
    return(
        <button onClick={resetButtonClickHandler}>Reset</button>
    )
}

export default ResetButton
import { IncDecServices } from "../reducers/IncDecSlice"
import { useAppDispatch } from "../stateStore"

const DecrementButton = ( {value}: {value: number | undefined} ) => {

    const dispatch = useAppDispatch()

    const decrementButtonClickHandler = ( e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!value) {
            dispatch(IncDecServices.actions.decrementNumber())
        } else {
            dispatch(IncDecServices.actions.decrementUserValue(value))
        }
    }
    return(
        <button onClick={decrementButtonClickHandler}>
        Decrement
        </button>
    )

}

export default DecrementButton
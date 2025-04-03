import { useAppDispatch } from "../stateStore"
import { IncDecServices } from "../reducers/IncDecSlice";

const IncrementButton = ({ value }: {value: number | undefined })=> {

    const dispatch = useAppDispatch();

    const incrementButtonClickHandler = ( e: React.MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault()
        if (!value) {
            dispatch(IncDecServices.actions.incrementNumber())
        }
        else{
            dispatch(IncDecServices.actions.decrementUserValue(value))
        }
    }

    return(
        <button onClick={incrementButtonClickHandler}>Increment</button>
    )
}

export default IncrementButton
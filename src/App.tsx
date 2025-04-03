import { ChangeEvent, useState } from 'react'
import './App.css'
import { useTypedSelector } from './stateStore'
import ResetButton from './Components/ResetButton'
import IncrementButton from './Components/IncrementButton'
import DecrementButton from './Components/DecrementButton'

function App() {

  const currentNumber = useTypedSelector((state) => state.currentNumber) //getting data from store
  const [ userNumber, setUserNumber ] = useState<number>()

  const userNumberHandler = ( e:ChangeEvent<HTMLInputElement> ) =>{
  setUserNumber(+e.target.value)  // + convert string values to number
  }

  return (    
    <>
     <h1>Hello World</h1>
     <h2>{currentNumber}</h2>
     <div className='buttons'>
      <div className='button-div'>
        <IncrementButton value={userNumber}/>
        <DecrementButton value={userNumber}/>
      </div>
      <ResetButton/>
     </div>
     <input type='number' value={userNumber ? userNumber: undefined} onChange={userNumberHandler}/>
    </>
  )
}

export default App

/**
 ** useSelector
 
What it is: 
useSelector is a hook that allows you to extract data from the Redux store state. It takes a selector function as an argument, which specifies what part of the state you want to access.

How it works:
 When you call useSelector, it subscribes your component to the Redux store. Whenever the selected part of the state changes, your component will re-render with the new state.
 */

 /**
  ** TypedUseSelectorHook
  * 
What it is: TypedUseSelectorHook is a TypeScript utility that allows you to create a typed version of the useSelector hook. This is particularly useful in TypeScript applications to ensure type safety when accessing the Redux state.

  */

/**
 ** Event Parameter:

(e: ChangeEvent<HTMLInputElement>): 
The function takes a single parameter e, which represents the event object. The type annotation ChangeEvent<HTMLInputElement> indicates that this function is specifically handling a change event from an HTML input element. This is a TypeScript feature that provides type safety, ensuring that 'e' is recognized as a change event from an input field.
 */
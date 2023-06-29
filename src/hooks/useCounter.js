import { useState } from "react"

export const useCounter = (initialValue = 0) => {

    const [counter, setcounter] = useState(initialValue)

    const increment = (value = 1) => {
        setcounter( (current) => current + value );
    }

    const decrement = (value = 1) => {
        if (counter <= 0) return
        setcounter( (current) => current - value );
    }

    const reset = () => {
        setcounter( initialValue );
    }

    return{
        counter: counter,
        increment: increment,
        decrement: decrement,
        reset: reset
    }
}
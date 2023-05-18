import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)
    const increment = useCallback(
      (value) => {
        setCounter( (count) => count + value );
      },
      [],
    )

    useEffect(() => {
    //   increment(5);
    }, [increment])
    

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    return (
        <>
            <h1>CallbackHook</h1>

            <h2>use Callback Hook: { counter }</h2>
            <hr />

            <ShowIncrement 
                increment={ increment }
            />
        </>
    )
}

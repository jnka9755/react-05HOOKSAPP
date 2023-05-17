import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, increment } = useCounter(5);

    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Memorize</h1>

            <h2>Counter: <Small value={ counter }/></h2>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >+1</button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow(!show) }
            > Show/Hide { JSON.stringify(show) } </button>
        </>
    )
}

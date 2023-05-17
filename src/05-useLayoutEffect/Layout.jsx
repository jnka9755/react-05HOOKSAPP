import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

    const { counter, increment} = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>MultipleCustomHooks</h1>
            <hr />

            {
                isLoading 
                ?   <LoadingQuote /> 
                :   <Quote
                        quote={quote}
                        author={author} 
                    />
            }

            <button 
                disabled={isLoading}
                className="btn btn-primary" 
                onClick={ () => increment() }
            > Next quote</button>
        </>
    )
}

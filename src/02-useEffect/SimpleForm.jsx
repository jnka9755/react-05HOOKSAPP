import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'JnKa',
        email: 'juan@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ] : value
        });
    }

    useEffect(() => {
        // console.log('useEffect called!')
    }, []);

    useEffect(() => {
        // console.log('formState called!')
    }, [formState]);

    useEffect(() => {
        // console.log('email called!')
    }, [email]);


    return (
        <>
            <h1>SimpleForm</h1>
            <hr />

            <input 
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={ onInputChange }
            />

            <input 
                className="form-control mt-2"
                type="email"
                placeholder="correo"
                name="email"
                value={email}
                onChange={ onInputChange }
            />

            {
                (username === 'JnKa1') && <Message />
            }
        </>
    )
}

import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    return (
        <>
            <h1>SimpleFormWithCustomHook</h1>
            <hr />

            <input 
                className="form-control"
                type="text"
                placeholder="Usuario"
                name="username"
                value={username}
                onChange={ onInputChange }
            />

            <input 
                className="form-control mt-2"
                type="email"
                placeholder="Correo"
                name="email"
                value={email}
                onChange={ onInputChange }
            />

            <input 
                className="form-control mt-2"
                type="password"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={ onInputChange }
            />

            <button 
                className="btn btn-primary mt-2"
                onClick={ onResetForm }
            >Borrar</button>
        </>
    )
}

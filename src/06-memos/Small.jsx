import { memo } from 'react'

export const Small = memo(({value}) => {

    console.log('Redibujar');

    return (
        <small> { value } </small>
    )
})

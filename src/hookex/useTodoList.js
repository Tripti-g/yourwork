import { useState } from 'react'

const useTodoList = (initialval = []) => {
    const [state, setstate] = useState(initialval);
    const update = (todo) => {
        setstate([...state, todo])
    }
    return [state, update]
}

export default useTodoList
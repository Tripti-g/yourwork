import { useState } from 'react'

const useInputHook = (initialval = '') => {
    const [state, setstate] = useState(initialval);
    const update = (e) => {
        setstate(e.target.value)
    }
    return [state, update]
}

export default useInputHook
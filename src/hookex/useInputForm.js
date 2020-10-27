import { useState } from 'react'
function InputForm(initialval = "")
{
    const [state, setState] = useState(initialval);
    const update = (e)=>{
        setState(e.target.value);
    }
    const reset = () =>{
        setState("")
    }
    return [state,update,reset];
}
export default InputForm